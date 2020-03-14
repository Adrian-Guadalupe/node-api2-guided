const express = require('express')
const hubsRouter = require('../hubs/hubs-router.js')

const server = express()

server.use(express.json())
server.use('/api/hubs', hubsRouter) // the router handles endponts that begin with /api/hubs

server.get('/', (req, res) => {
   res.send(`
     <h2>Lambda Hubs API</h>
     <p>Welcome to the Lambda Hubs API</p>
   `);
 });
 
module.exports = server;