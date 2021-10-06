const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 3100 });

wss.on('connection', function (ws) {
    ws.onmessage = function (event) {
        console.log(event.data);
        wss.clients.forEach(function (client) {
            if (client !== ws) {
                client.send('Halo! Others');
            }
        });
    };
    ws.send('Hi!');
});
