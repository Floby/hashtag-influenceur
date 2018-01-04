const Cards = require('../services/cards')
const express = require('express')

module.exports = ApiRouter

function ApiRouter () {
  const router = new express.Router()
  router.get('/cards', async function (req, res, next) {
    try {
      const [ verbCards, objectCards, complementCards, hashtagCards ] = await Promise.all([
        Cards.verbCards(),
        Cards.objectCards(),
        Cards.complementCards(),
        Cards.hashtagCards()
      ])
      res.json([].concat(verbCards, objectCards, complementCards, hashtagCards))
    } catch (e) {
      next(e)
    }
  })
  return router
}
