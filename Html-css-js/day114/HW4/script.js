function findTextInFiles(folder, text) {
    let result = { foundIn: [] };

    for (let i = 1; i <= 10; i++) {
        const files = ['file1.js', 'file2.js']; // მაგალითად, რეპლიკატით დაამატეთ ფაილების სახელები
        files.forEach(file => {
            const content = 'ფაილის შიგთავსი გოას ტექსტით'; // ეს იქნება ფაილის შიგთავსი
            if (content.includes(text)) {
                result.foundIn.push(`folder_${i}/${folder}/${file}`);
            }
        });
    }

    return result;
}

console.log(findTextInFiles('classwork', 'goa'));
