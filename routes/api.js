const express=require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
//const User=require('../models/user');
//const Chart=require('../models/chartdata');
const auth=require('./../auth/auth');
const mongoose=require('mongoose');
//const db="mongodb://kathirkokila:12439361cks@ds241530.mlab.com:41530/kathircks";
//const db="mongodb://kathirkokila:12439361cks@ds241530.mlab.com:41530/kathircks";
var db = "mongodb://localhost:27017/users";
//var db="mongodb://4bccc319324f9788b480a9ea8c4dd696:12439361@6a.mongo.evennode.com:27017,6b.mongo.evennode.com:27017/4bccc319324f9788b480a9ea8c4dd696?replicaSet=eu-6";

mongoose.connect(db, { useNewUrlParser: true },err =>{
    if(err){
        console.log("error"+err);
    }else{
        console.log("connected to mongodb");
    }
});

/*
function verifytoken(req,res,next){
    console.log(req.headers);
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
    }
    let token=req.headers.authorization.split('')[1];
    if(token ==='null'){
        return res.status(401).send('Unauthorized request');
    }
    let payload=jwt.verify(token,'secretkey');

    if(!payload){
        return res.status(401).send('Unauthorized request');
    }
    req.userId=payload.subject;
    next()
}
*/

router.get('/test',function(req,res){
    res.send('Apis Working Fine');
});

router.post('/post',function(req,res){
    console.log(req.data);
    /*auth.createtoken(req,function(err,response){

    res.send(response);
    });*/
    res.send(req.data);
});

/*
router.post('/register',function(req,res){
    
    let userData=req.body;  
    console.log(req.body);
    let user=new User(userData);
    user.save(function(error,registerUser){
        if(error){
            console.log(error);
        }else{
            let payload={ subject:registerUser._id }
            let token = jwt.sign(payload,'secretkey')
            res.status(200).send({token});
        }
    });
});


router.post('/login',function(req,res){
    
    let userData=req.body;  

    User.findOne({email:userData.email},function(error,user){
        if(error){
            console.log(error);
        }else{
            if(!user){ 
                res.status(401).send("Invalid Email");
            }else{
                if(user.password !== userData.password){  
                    res.status(401).send("Invalid password");
                }else{
                    let payload={ subject:user._id };
                    console.log(payload);
                    let token = jwt.sign(payload,'secretkey');
                    
                    res.status(200).send({token});

                }
            }
        }
    });
});

router.post('/imageupload',function(req,res){
    
    let userData=req.body;  
    console.log("-------");
    console.log(req.body);
    console.log(req.file);
    
    
});

router.get('/events',function(req,res){

    var token=req.headers.auth;
    let payload=jwt.verify(token,'secretkey');
    if(payload.subject){

        User.find({"_id":payload.subject},function(error,user){
            if(error){
                console.log(error);
            }else{
                res.json(user);
            }
        });
    }
});


router.get('/users',function(req,res){
     
    var token=req.headers.auth;
    let payload=jwt.verify(token,'secretkey');
    if(payload.subject){
        User.find(function(error,user){
            if(error){
                console.log(error);
            }else{
                res.json(user);
            }
        });
    }
});

// router.get('/usersevennode',function(req,res){

//     User.find(function(error,user){
//             if(error){
//                 console.log(error);
//             }else{
//                 console.log(user);
//                 res.json(user);
//             }
//         });

// });

*/
module.exports=router;
