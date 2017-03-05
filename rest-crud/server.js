var express  = require('express'),
    path     = require('path'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    cors = require('cors'),
    app = express(),
    expressValidator = require('express-validator');


/*Set EJS template Engine*/
app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors()); 

/*MySql connection*/
var connection  = require('express-myconnection'),
    mysql = require('mysql');

app.use(
    connection(mysql,{
        host     : 'localhost',
        user     : 'root',
        password : 'manager9',
        database : 'test',
        debug    : false //set true if you wanna see debug logger
    },'request')
);

app.get('/',function(req,res){
    res.send('Welcome');
});


//RESTful route
var router = express.Router();


/*------------------------------------------------------
*  This is router middleware,invoked everytime
*  we hit url /api and anything after /api
*  like /api/user , /api/user/7
*  we can use this for doing validation,authetication
*  for every route started with /api
--------------------------------------------------------*/
router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

var restauranteRoute = router.route('/restaurantes');

//show the CRUD interface | GET
restauranteRoute.get(function(req,res,next){
    req.getConnection(function(err,conn){
        if (err) return next("Cannot Connect");
        var query = conn.query('SELECT * FROM restaurantes',function(err,rows){
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.status(200).json({status:"success",data:rows});
        });
    });
});

//post data to DB | POST
restauranteRoute.post(function(req,res,next){

    //validation
    req.assert('name','Name is required').notEmpty();
    req.assert('email','A valid email is required').isEmail();
    req.assert('password','Enter a password 6 - 20').len(6,20);

    var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }

    //get data
    var data = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
     };

    //inserting into mysql
    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("INSERT INTO restaurantes set ? ",data, function(err, rows){

           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);

        });

     });

});


//now for Single route (GET,DELETE,PUT)
var restauranteRoute2 = router.route('/restaurante/:id');

/*------------------------------------------------------
route.all is extremely useful. you can use it to do
stuffs for specific routes. for example you need to do
a validation everytime route /api/restaurante/:id it hit.

remove restauranteRoute2.all() if you dont want it
------------------------------------------------------*/
restauranteRoute2.all(function(req,res,next){
    console.log("You need to smth about restauranteRoute2 Route ? Do it here");
    console.log(req.params);
    next();
});

//get data to update
restauranteRoute2.get(function(req,res,next){
    var id = req.params.id;

    req.getConnection(function(err,conn){
        if (err) return next("Cannot Connect");

        var query = conn.query("SELECT * FROM restaurantes WHERE id = ? ",[id],function(err,rows){
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            //if user not found
            if(rows.length < 1)
                return res.send("User Not found");

            res.status(200).json({status:"success",data:rows[0]});
        });
    });
});

//update data
restauranteRoute2.put(function(req,res,next){
    var user_id = req.params.user_id;

    //validation
    req.assert('name','Name is required').notEmpty();
    req.assert('email','A valid email is required').isEmail();
    req.assert('password','Enter a password 6 - 20').len(6,20);

    var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }

    //get data
    var data = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
     };

    //inserting into mysql
    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("UPDATE restaurantes set ? WHERE user_id = ? ",[data,user_id], function(err, rows){

           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);

        });

     });

});

//delete data
restauranteRoute2.delete(function(req,res,next){

    var user_id = req.params.user_id;

     req.getConnection(function (err, conn) {

        if (err) return next("Cannot Connect");

        var query = conn.query("DELETE FROM restaurantes  WHERE user_id = ? ",[user_id], function(err, rows){

             if(err){
                console.log(err);
                return next("Mysql error, check your query");
             }

             res.sendStatus(200);

        });
        //console.log(query.sql);

     });
});


//now we need to apply our router here
app.use('/api', router);

//start Server
var server = app.listen(3000,function(){

   console.log("Listening to port %s",server.address().port);

});
