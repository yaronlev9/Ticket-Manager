const app = require('./app');
let port;
port = 8080;
//port = 3001;
const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});
