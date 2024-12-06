require('http').createServer((req, res) => {
    if (req.url === '/about') res.end('About Section');
    else res.end('Hello, World!');
}).listen(3000);
