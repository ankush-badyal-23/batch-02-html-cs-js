const WebSocketServer = require('ws');
const PORT = 9000
const wss = new WebSocketServer.Server({port:PORT});

wss.on('connection', ws =>{
    console.log('new client connected');
    ws.send(JSON.stringify({type:'broadcast', message:'Welcome Client!!'}));
    ws.on('message', data => {
        console.log('Received from client:', JSON.parse(data));
    });
    ws.on('close', ()=>{
        console.log('the client has dis-connected');
    });
    ws.on('error', (e)=>{
        console.log('error occurred',e);
    });
})
console.log(`The WebSocket server is running on port ${PORT}`);
