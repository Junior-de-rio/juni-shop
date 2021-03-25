let http = require('http')
let app = require('./app')
const host = '0.0.0.0'
const port = process.env.PORT || 3500
let server = http.createServer(app)

server.listen(port, function(){
    console.log('Server running on http://'+host+':'+server.address().port)
})