const jwt=require('jsonwebtoken');

function auth(req,res,callback){

    if(req.body.token)
    {
        let payload={ subject:req.data }
    let token = jwt.sign(payload,'2711');
    console.log(token);
    
        req.data='check kathir';
    }
    callback();
};

function createtoken(req,res,callback){

    let payload={ subject:req.data }
    let token = jwt.sign(payload,'2711');
    console.log(token);
    callback();
};

module.exports.auth=auth;
module.exports.createtokens=createtoken;