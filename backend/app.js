const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');

//статические ресурсы
app.use(express.static(path.join(__dirname, 'public')));

server.listen(3001, function () {
    console.log('Server running in port 3000');
});

const users = {}; // все пользователи чата
const rooms = ['general', 'random', 'boltalka'];

io.sockets
    .on('connection', function (socket) {

        socket.on('message', function (data) {
            console.log(data);
            socket.broadcast.emit('answer', data);
            socket.emit('answer', data);
        })
    });
