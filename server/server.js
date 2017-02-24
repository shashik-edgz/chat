const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'../public');
var app = express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection',(socket) =>{
    console.log('shashik Connectied');



   socket.on('createMessage',(message)=>{
       console.log('create message',message);
       io.emit('newMessage',{
           from:message.from,
           text:message.text,
           createAt:new Date().getTime()
       });
   });


    socket.on('disconnect',()=>{
        console.log('user Disconnected') ;
    });
});



server.listen(port,() =>{
    console.log(`server is sun ${port}`);
});