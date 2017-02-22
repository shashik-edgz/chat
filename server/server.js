const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'../public');
var app = express();

app.use(express.static(publicPath));

app.listen(3000,() =>{
    console.log('server is sun');
});