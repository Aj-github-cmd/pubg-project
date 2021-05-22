const express = require('express');
//database connection
const User = require('../models/dbSchema');
const router  = express.Router();
router.get('/login',(req,res)=>
{
  res.render('twitterlogin');
})
router.get('/register',(req,res)=>
{
  res.render('fblogin');
})

//same get and post request for twitterlogin

router.post('/register',(req,res)=>
{
 const {email,password} = req.body;
  let errors = [];
  //fiil in error
  if(!email || !password)
  {
    errors.push({msg:'please fill all details'})
  }
  //password matching error
  //Password length error
  if(password.length<6)
  {errors.push({msg:"password is too short"})}
  if(errors.length>0){
    res.render('fblogin',{
     errors,
     email,
     password,
    });
  }
  else{
    //valiadation
    User.findOne({ email: email })
    .then(user=>{
      if(user)//user exist
      {
      errors.push({msg:"User doesn't exist"})
       res.render('twitterlogin',
       {
        errors,
        email,
        password,
       })
      }
      else{
        const newUser = new User({
          email,
          password,
         
        }); 
          newUser.save()//saving new user in db
          .then(user=>
            {
            req.flash('success_msg','You are now registered')
            res.redirect('/dashboard')
            })
          .catch(err=>console.log(err));
        // }))
      }
    })
    .catch(err=>{console.log(err)})
  }
});


//for twitter sign up

router.post('/login',(req,res)=>
{
 const {email,password} = req.body;
  let errors = [];
  //fiil in error
  if(!email || !password)
  {
    errors.push({msg:'please fill all details'})
  }
  //password matching error
  //Password length error
  if(password.length<6)
  {errors.push({msg:"password is too short"})}
  if(errors.length>0){
    res.render('fblogin',{
     errors,
     email,
     password,
    });
  }
  else{
    //valiadation
    User.findOne({ email: email })
    .then(user=>{
      if(user)//user exist
      {
      errors.push({msg:"User doesn't exist"})
       res.render('twitterlogin',
       {
        errors,
        email,
        password,
       })
      }
      else{
        const newUser = new User({
          email,
          password,
         
        }); 
          newUser.save()//saving new user in db
          .then(user=>
            {
            req.flash('success_msg','You are now registered')
            res.redirect('/dashboard')
            })
          .catch(err=>console.log(err));
        // }))
      }
    })
    .catch(err=>{console.log(err)})
  }
});

module.exports = router;
