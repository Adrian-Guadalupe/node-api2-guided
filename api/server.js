const express = require('express')
const hubsRouter = require('../hubs/hubs-router.js')

const server = express()

server.use(express.json())
server.use('/api/hubs', hubsRouter) // the router handles endponts that begin with /api/hubs

server.get('/', (req, res) => {
  const query = req.query

  console.log('query', query)

  res.status(200).json(query)
});

module.exports = server;