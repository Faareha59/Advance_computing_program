const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('hello');
});
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Greetings,${name}`);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});