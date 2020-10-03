import React, { useEffect, useState } from 'react';
import Ticket from './components/Ticket';
import Header from './components/Header';
import './App.css';

function App() {
  const [ticketsList, setTicketsList] = useState([]);
  const [hiddenList, setHiddenList] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = 'Tickets Manager';
  }, []);

  function addTohiddenList(ticket) {
    const curHiddenLst = hiddenList.slice();
    curHiddenLst.push(ticket);
    setHiddenList(curHiddenLst);
  }

  function client(endpoint) {
    const headers = {'content-type': 'application/json'}
    const config = {
      method: 'GET',
    }
    let search = '';
    if (endpoint !== ''){
      search = `?searchText=${endpoint}`;
    }
    return window
      .fetch(`/api/tickets${search}`, config)
      .then(async response => {
        const data = await response.json()
        if (response.ok) {
          return data
        } else {
          console.log("error");
          return Promise.reject(data)
        }
      })
  }

  const showTicketsFromServer = async () => {
    let ticketsArray = await client(search);
    setAllTickets(ticketsArray);
    const showTicketsFromArray = [];
    let counter = 0;
    if (ticketsArray !== undefined) {
      hiddenList.forEach((ticket) => {
        ticketsArray = ticketsArray.filter((item) => item.id !== ticket.id);
      });
      ticketsArray.forEach((ticket) => {
        showTicketsFromArray.push(
          <li key={counter} id={ticket.id}>
            <Ticket obj={ticket} onClick={(ticketObl) => addTohiddenList(ticketObl)} />
          </li>,
        );
        counter += 1;
      });
      setTicketsList(showTicketsFromArray);
    }
  };

  function updateTickets() {
    const showTicketsFromArray = [];
    let counter = 0;
    let ticketsArray = allTickets.slice();
    if (ticketsArray !== undefined) {
      hiddenList.forEach((ticket) => {
        ticketsArray = ticketsArray.filter((item) => item.id !== ticket.id);
      });
      ticketsArray.forEach((ticket) => {
        showTicketsFromArray.push(
          <li key={counter} id={ticket.id}>
            <Ticket obj={ticket} onClick={(ticketObj) => addTohiddenList(ticketObj)} />
          </li>,
        );
        counter += 1;
      });
      setTicketsList(showTicketsFromArray);
    }
  }

  function editSearch(value) {
    setSearch(value);
    setHiddenList([]);
  }

  function restoreLst() {
    setHiddenList([]);
  }

  useEffect(() => {
    showTicketsFromServer();
  }, [search]);

  useEffect(() => {
    updateTickets();
  }, [hiddenList]);

  return (
    <div>
      <div>
        <Header
          onChange={(value) => editSearch(value)}
          onClick={restoreLst}
          allTickets={allTickets}
          hiddenList={hiddenList}
        />
      </div>
      <br />
      <ul>
        {ticketsList}
      </ul>
    </div>
  );
}

export default App;
