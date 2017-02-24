/**
 * Created by Shashiki on 2/22/2017.
 */
var socket = io();
socket.on('connect',()=>{
    console.log('server Connected');

    socket.emit('createMessage',{
        from:'Andrew',
        text:'Shashik Thhiwanka Dev'
    });
});

socket.on('disconnect',()=>{
    console.log('disconnected');
});

socket.on('newMessage',(message)=>{
    console.log('new MEssage',message);
});

