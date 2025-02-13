const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/packages', (req, res) => {
    res.json([
        { name: 'საზღვარგარეთ გამგზავრება' },
        { name: 'გზის შესწავლა' },
        { name: 'ქვეყნის ტურები' }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
