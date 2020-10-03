const express = require('express');
const fs = require('fs').promises;

const app = express();
app.use(express.static('build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/tickets', async (req, res) => {
  const search = req.query.searchText;
  const dataListJson = await fs.readFile('./data.json');
  const dataList = JSON.parse(dataListJson);
  const toSend = [];
  if (search === undefined) {
    res.send(dataList);
  } else {
    const lowerSearch = search.toLowerCase();
    dataList.forEach((data) => {
      const title = data.title.toLowerCase();
      if (title.includes(lowerSearch)) {
        toSend.push(data);
      }
    });
    res.send(toSend);
  }
});

app.post('/api/tickets/:ticketId/done', async (req, res) => {
  const id = req.params.ticketId;
  let dataListJson = await fs.readFile('./data.json');
  const dataList = JSON.parse(dataListJson);
  dataList.forEach((data) => {
    if (data.id === id) {
      data.done = true;
    }
  });
  dataListJson = JSON.stringify(dataList);
  req.body.updated = true;
  await fs.writeFile('./data.json', dataListJson);
  res.send(req.body);
});

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
  const id = req.params.ticketId;
  let dataListJson = await fs.readFile('./data.json');
  const dataList = JSON.parse(dataListJson);
  dataList.forEach((data) => {
    if (data.id === id) {
      data.done = false;
    }
  });
  dataListJson = JSON.stringify(dataList);
  req.body.updated = true;
  await fs.writeFile('./data.json', dataListJson);
  res.send(req.body);
});

module.exports = app;
