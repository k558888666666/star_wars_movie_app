var moviesJSON = require('../movies.json');

//home
exports.home = function(req, res) { /* when server get request, then server respond*/
    var movies = moviesJSON.movies;
    var moviePosters = [];
    for(var i = 0; i <movies.length; i++){
        moviePosters= moviePosters.concat(movies[i].poster);
    }
    res.render('home' , {
        title : "Star Wars Movies",
        movies : movies,
        moviePosters : moviePosters
    });
};
// movie_single
exports.movie_single = function(req, res) {
    var episode_number = req.params.episode_number;
    var movies = moviesJSON.movies;
    if(episode_number >= 1 && episode_number <= 6){
        var movie = movies[episode_number - 1];
        var title = movie.title;
        var main_characters=movie.main_characters;
        res.render('movie_single',{
            title : title,
            movies : movies,
            movie : movie,
            main_characters : main_characters
        });
    }else{
        res.render('notFound',{
            movies : movies,
            title : "URL可能已更改，或者頁面可能已被刪除。",
        });
    }
};
// notFound /*must be bottom*/ 
exports.notFound = function(req, res) { 
    var movies = moviesJSON.movies;
    res.render('notFound',{
        movies : movies,
        title : "URL可能已更改，或者頁面可能已被刪除。",
    });
};