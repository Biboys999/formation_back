var express = require('express')
var app = express()

app.use('/', (req, res) => {
    res.end('coucou')
})

module.exports = app