const express = require('express')
const expressLayout = require('express-ejs-layouts')
const Mongoose = require('mongoose')
const flash = require('connect-flash')
var path = require('path')
const session = require('express-session')
const app = express();
// const passport = require('passport')
//passport config
// require('./config/passport')(passport);
//database config
const db = require('./config/keys').MongoURI;
Mongoose.set('useUnifiedTopology', true);
Mongoose.connect(db,{ useNewUrlParser: true })
.then(console.log('mongodb connected properly'))
.catch(err=>{console.log(err)});

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.resolve(__dirname,'public')))
//session
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
//passport middlewire
// app.use(passport.initialize());
// app.use(passport.session());
//flash
app.use(flash());
  //global var for flash msg
  app.use((req,res,next)=>
  {
      res.locals.success_msg = req.flash('success_msg')
      res.locals.error_msg = req.flash('error_msg')
      res.locals.error = req.flash('error')
      next();
  })
//Routing
app.use('/',require('./routers/index')) 
app.use('/users',require('./routers/users'))
//EJS templating for auth app
app.use(expressLayout);
app.set('view engine','ejs')

app.listen(4080,()=>
{
  console.log('Server listening at 4080');
})
