require('http').createServer((req, res) => res.end(req.url === '/homepage' ? 'Homepage' : 'Not Found')).listen(3000);

