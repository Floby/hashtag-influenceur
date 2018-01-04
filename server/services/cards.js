const Path = require('path')
const CsvParse = require('csv-parse')
const fs = require('fs')
const sink = require('stream-sink')
const MapStream = require('through2-map')

exports.verbCards = async function () {
  return parseWithType(Path.join(__dirname, '../../cards/verbs.csv'), 'verb')
}
exports.objectCards = async function () {
  return parseWithType(Path.join(__dirname, '../../cards/objects.csv'), 'object')
}
exports.complementCards = async function () {
  return parseWithType(Path.join(__dirname, '../../cards/complements.csv'), 'complement')
}
exports.hashtagCards = async function () {
  return parseWithType(Path.join(__dirname, '../../cards/hashtags.csv'), 'hashtag')
}

function parseWithType (filepath, type) {
  return fs.createReadStream(filepath)
    .pipe(CsvParse({ columns: true }))
    .pipe(addTypeStreamMap(type))
    .pipe(sink('object'))
}

function addTypeStreamMap (type) {
  return MapStream.obj(function (card) {
    return { type, ...card }
  })
}
