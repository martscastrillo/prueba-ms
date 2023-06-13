const express = require('express');
const cors = require('cors');


// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

let calcHistory = [];
server.get('/calc', (req, res) => {
    const args = req.query.args;

  console.log(args);
  });
  server.get('/history', (req, res) => {
   
    console.log(calcHistory);
 
  });
const staticServer = './src/public-react';
server.use(express.static(staticServer));