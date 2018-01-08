// Get all required files
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session'); // module for maintaining the sessions
var configDB = require('./config/database.js');
var engines = require('consolidate');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database
require('./config/passport')(passport); // pass passport for configuration

app.configure(function () {

    // set up our express application
    app.use(express.logger('dev')); // log every request to the console
    app.use(express.cookieParser()); // read cookies (needed for auth)
    app.use(express.bodyParser()); // get information from html forms

    app.set('view engine', 'ejs'); // set up ejs for templating
    
    // required for passport
    app.use(session({
        name: 'CART',
        secret: 'cartsOath',
        resave: true,
        httpOnly: true,
        proxy: true,
        saveUnintialized: true,
        cookie: {secure: false}
    }))


// session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session

});

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('Boom!!!--Cart Is Opening' + port);
