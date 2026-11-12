const express = require( 'express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to my Homepage!');
});

app.get('/about', (req, res) => {
    res.send('This is where you can know about me. ');
});

app.get('/contact', (req, res) => {
    res.send('contact me at lincoludoh@gmail.com. ');
});


app.get('/service', (req, res) => {
    res.send('contact me at lincoludoh@gmail.com. ');
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});