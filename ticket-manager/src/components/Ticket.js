import React from 'react';
import './Ticket.css';

function cleanDate(num) {
  const d = new Date(num);
  const amOrPm = d.getHours() < 12 ? 'AM' : 'PM';
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}, ${
    d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${amOrPm}`;
}

function Ticket(props) {
  const labelArr = [];
  if (props.obj.labels) {
    props.obj.labels.forEach((label) => {
      labelArr.push(<span className="label">{label}</span>);
    });
  }
  return (
    <div className="ticket">
      <button className="hideTicketButton" onClick={() => { props.onClick(props.obj); }}>Hide</button>
      <div id="title"><b>{props.obj.title}</b></div>
      <br />
      <div id="content">{props.obj.content}</div>
      <br />
      <span id="userEmail">
        By
        {props.obj.userEmail}
        {' '}
        |
        {' '}
      </span>
      <span id="creationTime">{cleanDate(props.obj.creationTime)}</span>
      <span>
        <ul>
          {labelArr}
        </ul>
      </span>
    </div>
  );
}

export default Ticket;
