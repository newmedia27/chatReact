import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001/');

export const message = value => {
    return socket.emit('message', value);
}
