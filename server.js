//Part 3  Add Folders to Organize the Express Server Code (config, routes, models and controllers)
//Install and Mount the dotenvMiddleware
require('dotenv').config(); // Always require and configure near the top
const logger = require('morgan');
//Part2
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');


const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

/*/ Ensuring that the React Dev Server Sends AJAX Calls to the Express Server; Instead of using the code below; 
  return fetch('/api/orders/history').then(res => res.json()); 
  //add a "proxy" key (Forwarding Key) in the TOP-LEVEL of the package.json:i.e.;  "proxy": "http://localhost:3001", /**/




// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Express app running on port ${port}`)
});