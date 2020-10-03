# ![Scale-Up Velocity](./readme-files/logo-main.png)   Final 1/5 - Tickets Manager
This project will include most of the topics we have learnt so far.
This repository includes a basic skeleton with automated tests, use it for you submissions.
In this project you will create a Ticket Manager Web Application, with React.js and Express

## Backend Requirements
The Express app should be located in the path `server/app.js` and export the `app` object (`module.exports = app;`).
- The server should run on port `8080` serve the react app on `http://localhost:8080/` and expose those API endpoints:
  - [GET] api/tickets - returns an array of tickets from saved in `server/data.json`. If called with [query param](https://en.wikipedia.org/wiki/Query_string) `searchText` the API will [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) only tickets that have a title including a [case-insensitive](https://en.wikipedia.org/wiki/Case_sensitivity) version of the `searchText` param
  - [POST] api/tickets/[:ticketId](https://stackoverflow.com/a/20089634/10839175)/done - Sets `done` property to `true` for the given ticketId
  - [POST] api/tickets/[:ticketId](https://stackoverflow.com/a/20089634/10839175)/undone - Sets `done` property to `false` for the given ticketId

## Requirements Client
- The app title should be `Tickets Manager` with a custom [favicon](https://en.wikipedia.org/wiki/Favicon). You can create one [here](https://favicon.io/)
- The app should load (from backend) and show all Tickets.
- The Ticket component should have className `ticket` and should match this appearance: ![ticketcomponent](./readme-files/ticketcomponent.png)
- App ticket data (received from the server) might contain `label` property (an array of strings). add those tags to the UI using elements having the `label` class. Use the following style as an example: ![tags](./readme-files/tags.png)
PS: feel free to add more label strings to the data (`data.json`) if you need.
- The app should have input with id `searchInput`. This input should request the server on `onChange` with relevant `searchText` param and update the list accordingly
- Add a hide button with className `hideTicketButton` that will hide the tickets from view. Add a counter of number of hiding tickets, this counter should have a `hideTicketsCounter` className.
- Add a button to restore the hidden ticket list on click with the id `restoreHideTickets` ![hide](./readme-files/hideit.gif)

![preview of the app](https://github.com/yaronlev9/Ticket-Manager/blob/master/ticket-manager/ui-testing-recording.gif)
