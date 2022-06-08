const http = require('http');
const express = require('express');
const app = express();

const path = require('path');
//sequelize utilizar


const hostname = '127.0.0.1';
const porta = 3000;


app.get('/',function(req,res){
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/style',function(req,res){ 
    res.sendFile(path.join(__dirname, 'public/style/style.css'));   
});


app.listen(porta);

console.log(`Servidor ouvindo http://${hostname}:${porta}/`);