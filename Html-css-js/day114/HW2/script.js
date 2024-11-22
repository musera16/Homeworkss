const fs = require('fs');

function deleteFolders(start, end) {
    for (let i = start; i <= end; i++) {
        fs.rmSync(`folder_${i}`, { recursive: true, force: true });
    }
}

// წაშლის 3-დან 7-მდე
deleteFolders(3, 7);
