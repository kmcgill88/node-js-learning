var express = require('express');
var app = express();
var Movie;
var bodyParser = require('body-parser');
var movieValidator = require('./movie-validator');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

app.get('/', function (req, res) {

  Movie.find({ "_id":req.query.id }, function (err, movie) {
    if (err) {
      res.status(503).send(err);
    }

    if(movie == "undefined") {
      res.status(404).send("Don't know what movie that is.");
    } else {
      res.json(movie);
    }

  });

});

app.post('/', function (req, res) {

  var movie = new Movie({
    title: req.body.title,
    year: req.body.year,
    director: req.body.director
  });

  movie.save(function (err) {
    if (err) {
      res.status(503).send(err);
    } else {
      res.json(movie);
    }
  });

});

app.put('/', function (req, res) {
  res.send('PUT!');
});

app.delete('/', function (req, res) {
  res.send('DELETE!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');

  Movie = mongoose.model('Movie', {
    title: String,
    year: Number,
    director: String
  });

});
