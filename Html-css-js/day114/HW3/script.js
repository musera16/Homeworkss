const fs = require('fs');

function log(action) {
    fs.appendFileSync('log.txt', `${action} at ${new Date().toLocaleString()}\n`);
}

// მაგალითები:
log('Created folder folder_1');
log('Deleted folder folder_5');
