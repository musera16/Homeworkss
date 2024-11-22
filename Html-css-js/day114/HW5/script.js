// საჭირო მოდულის შემოტანა
const http = require('http');

// სერვერის შექმნა
const server = http.createServer((req, res) => {
    // სათაურის განსაზღვრა
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // JSON მონაცემების გაგზავნა
    const response = {
        message: 'Welcome to GOA!'
    };

    // JSON-ის გამოგზავნა
    res.end(JSON.stringify(response));
});

// სერვერის დასაწყობი მითითებული პორტით
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
