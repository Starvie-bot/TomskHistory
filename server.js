const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const http = require('http')
const server = http.createServer((request,response) =>{})
app.use(express.static(path.join(__dirname)));



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/gallery', function(req, res) {
    res.sendFile(path.join(__dirname, 'gallery.html'));
});


app.get('/history', function(req, res) {
    res.sendFile(path.join(__dirname, 'history.html'));
});

app.get('/contacts', function(req, res) {
    res.sendFile(path.join(__dirname, 'contacts.html'));
});

app.get('/places', function(req, res) {
    res.sendFile(path.join(__dirname, 'places.html'));
});



app.listen(port, function() {
    console.log(`Сервер запущен на http://localhost:${port}`);
   
});

app.get('/test', (req, res) => {
    res.send('Сервер работает!');
});