require('dotenv').config();
var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require("cors");
var router = express.Router();
var session = require('express-session');
var passport = require("passport");
var passportLocalMongoose = require("passport-local-mongoose");

var app = express();

//app.set('view engine', 'ejs');
app.use(cors({
    origin: "http://localhost:3000", // restrict calls to those this address
    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
  
app.use(passport.initialize());
app.use(passport.session());


//Connecting to MongoDB using mongoose
mongoose.connect('mongodb://localhost:27017/MovieGoDB', {useNewUrlParser: true});
mongoose.set("useCreateIndex", true);

//Defining Schemas
var userSchema = new mongoose.Schema({
    fullName: String,
    username: String,
    contactNumber: String,
    password: String
});
var bookingSchema = new mongoose.Schema({
    booking: String
});

//Using passport-local-mongoose plugin on userSchema
userSchema.plugin(passportLocalMongoose);

//Defining Models
var User = new mongoose.model('User', userSchema);
var Booking = new mongoose.model('Booking', bookingSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//All our requests go in here
router.get('/signedin', function(req, res){
    res.json(req.isAuthenticated());
});

router.post('/signin', function(req, res){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err){
        if (err) {
            console.log(err);
        }
        else {
            passport.authenticate("local")(req, res, function(){
                res.send(user);
            });
        }
    });
});

router.post('/register', function(req, res){
    User.register({fullName: req.body.fullName, 
        username: req.body.username,
        contactNumber: req.body.contactNumber}, req.body.password, function(err, user){
            passport.authenticate("local")(req, res, function(){
                res.json(user);
        });
    });
});

router.post('/pay', function(req, res){
    var newBooking = Booking({booking: req.body.bookingDetails}).save(function(err, data){
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });
});

router.post('/seats', function(req, res){
 
    var regex1 = '^' + req.body.bookingDetails;
    var regex2 = regex1.replace(/\//g, "\\/");
    var re = new RegExp(regex2,"g");

    Booking.find({booking: re}, function(err, data){
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });

    /*Booking.find({booking: /^tt1596343\/01-11-2019\/07:45/g}, function(err, data){
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    });*/
});

router.get('/logout', function(req, res){
    req.logout();
    res.json(req.isAuthenticated());
});

app.use('/api', router);

app.listen(3001);
console.log("Listening to port 3001\n");
