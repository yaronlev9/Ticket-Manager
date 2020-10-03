import React from 'react';
import '../App.css';

function Header(props) {
  let allTickets = 0;
  let hiddenList = 0;
  if (props.allTickets !== undefined) {
    allTickets = props.allTickets.length;
  }
  if (props.hiddenList !== undefined) {
    hiddenList = props.hiddenList.length;
  }
  return (
    <div className="header">
      <span id="command">
        Showing {allTickets} results. (
        <span id="hideTicketsCounter">{hiddenList}</span>
        {' '}
        hidden tickets)
        {hiddenList !== 0 && <button id="restoreHideTickets" onClick={props.onClick}>restore</button>}
      </span>
      <div><input type="text" id="searchInput" placeholder="find text ..." onChange={(e) => { props.onChange(e.target.value); }} /></div>
    </div>
  );
}

export default Header;
