// const http = require('http');

// const server = http.createServer((req, res) => {
//     let pathname = req.url;
//     if(req.method=== 'GET'){
//     if (pathname === '/users') {
//         res.write("hello");
//         res.write("world ");
//         res.end(); // Corrected to res.end()
//     }}
//     else if(req.method==='POST'){
//     if (pathname === '/users') {
//         res.write("hey");
//         res.write("hello");
//         res.write("world2 ");
//         res.end();
//         res.write("patta") // Corrected to res.end()
//     }}
// });

// server.listen(2080, () => {
//     console.log("Server is running");
// });

const http = require('http');

const server = http.createServer((req, res) => {
    let pathname = req.url;
    if (req.method === 'GET') {
        if (pathname === '/users') {
            res.write("GET request: hello world");
            res.end();
        } else if (pathname === '/') {
            res.write("GET request: hey hello world");
            res.end();
        }
    } else if (req.method === 'POST') {
        if (pathname === '/users') {
            res.write("POST request: create user");
            res.end();
        }
    } else if (req.method === 'PUT') {
        if (pathname === '/users') {
            res.write("PUT request: update user");
            res.end();
        }
    } else if (req.method === 'DELETE') {
        if (pathname === '/users') {
            res.write("DELETE request: delete user");
            res.end();
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("404 Not Fou");
    }
});

server.listen(2080, () => {
    console.log("Server is running");
});
//we can execute the program in thunder client 
