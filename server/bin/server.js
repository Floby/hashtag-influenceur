#!/usr/bin/env node

const { createServer } = require('../')
const http = require('http')

const PORT = Number(process.env.PORT) || 3000
const application = createServer(new Map())
const server = http.createServer(application)
server.listen(PORT, (err) => {
  if (err) {
    console.error(err.stack)
    process.exit(1)
  }
  console.log('server started on port', PORT)
})
