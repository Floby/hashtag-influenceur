const Path = require('path')
const express = require('express')
const morgan = require('morgan')
const ApiRouter = require('./routes/api')

module.exports = function (app) {
  app.use(morgan('dev'))
  app.use('/api', ApiRouter())
}
module.exports.createServer = createServer

function createServer (options) {
  const app = express()
  app.use(morgan('dev'))
  app.use('/api', ApiRouter())
  app.use(express.static(Path.join(__dirname, '..', 'dist')))
  app.use((req, res) => {
    res.sendFile(Path.join(__dirname, '../dist/index.html'))
  })
  return app
}
