const http = require('http')

const handlerHttpRequests = (req, resp) => console.log('Im live here!')

const server = http.createServer( handlerHttpRequests )

server.listen(3000)