const express = require('express');
const bodyparser = require('body-parser');
//const cors=require('cors');

const PORT=3000;
const api=require('./routes/api');
const auth=require('./auth/auth').auth;
const genauth=require('./auth/auth').createtoken;
const app=express();

//app.use(cors());
app.use(bodyparser.json());

app.all('/api/*',auth,function(req, res, next){
 console.log("auth");
 //return authtoken(req,res,next);
 next();
});

app.use('/api',api);

app.get('/',function(req,res){
    res.send('hello from the server');
});

function authtoken(req,res,callback){
    
    console.log("module");
    return callback();
    //return res.send(400);
}

app.listen(PORT,function(){
    console.log('server running on localhost:'+PORT);
});