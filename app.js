const express = require('express');
const app = express();

const path = require('path');
const staticPath = path.join(__dirname,'public');

const PORT = process.env.PORT || 3000;

app.use(express.static(staticPath));

app.listen(PORT, () => console.log("Instanciando servidor en el puerto: "+PORT));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"));
});

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,"./views/register.html"));
});

app.post('/register', (req,res) => {
    res.redirect('/')
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,"./views/login.html"));
});

app.post('/login', (req,res) => {
    res.redirect('/');
});