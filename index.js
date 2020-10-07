var http = require("http")
var app = require('./app')
require('dotenv').config()

app.set(console.log(`portail n° : ${process.env.PORT || 3000}`), process.env.PORT || 3000)
const server = http.createServer(app)

server.listen(process.env.PORT || 3000)
