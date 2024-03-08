console.log("HELLO WORLD")

import http from 'http'

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end ('<h1>Hello Node!!!</h1>\n');
});

const PORT = 8080

server.listen(PORT, () => 
    console.log(`server is running on http://localhost:${PORT}`));

