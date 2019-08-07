var express = require('express'); /* give app all functions of Express */
var app = express();


app.set('view engine', 'ejs');

var routes = require('./routes');
var path = require('path'); /*get npm path*/ 
app.use(express.static(path.join(__dirname, 'public')));

//routes

/*--------Building environment--------*/ 

//running localhost 
app.listen(process.env.PORT || 4000);
app.get('/darth' , function(req, res) { /*example*/
    res.send("This is a server response on the darth page");
});
/*--------Building environment END--------*/ 

//home
app.get('/' , routes.home);

// movie_single
app.get('/star_wars_episode/:episode_number?' , routes.movie_single);

// notFound /*must be bottom*/ 
app.get('*' , routes.notFound);
