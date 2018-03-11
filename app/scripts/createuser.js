var bcrypt = require('bcrypt');
var User = require('../models/user');
const database = require('../routes/auth');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a username:', (u)=>{
    var user = {};
    user['username'] = u;
    password(user);  
});

function password(user){
    
                rl.question('Please enter a  password:', (p)=>{
                    user['password'] = p;
                    rl.question('Please re-enter password:', (p2)=>{
                        user['password2'] = p2;
                    if(user['password'] != user['password2']){
                        console.log("Passwords do not match");
                        password(user);
                    } else{
                        console.log("Please verify your information:");
                        console.log("Username:" + user['username']);
                        console.log("password:" + user['password']);
                        rl.question('Is this correct?(y/n):', (answer)=>{
                            if(answer.toLowerCase().indexOf('y')!== -1){
                                rl.close();
                                addUser(user);
                                
                            } else{
                                console.log("User add cancelled");
                                rl.close();
                                process.exit();
                            }
                            
                        });
                    }
                });
                });
                
}

function addUser(user){
     const saltRounds = 10;
      bcrypt.hash(user['password'], saltRounds, function(err, hash){
         User.findOrCreate({
          where: {username: user['username']},
          defaults: { 
            password:hash}})
          .spread(newuser=>{
            console.log(newuser);
            process.exit();
        })
          .catch(function (err){
            console.log(err);
            process.exit();
        });  
      });
}