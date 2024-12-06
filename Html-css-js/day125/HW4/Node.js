require('http').createServer((_, r) => r.end('<a href="/about">Go to About</a>')).listen(3000);
