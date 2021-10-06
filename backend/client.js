const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3100');

ws.onmessage = function (event) {
    console.log(event.data);
};
ws.onopen = function () {
    ws.send('Hello!');
};
