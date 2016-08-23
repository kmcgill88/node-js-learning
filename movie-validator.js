module.exports = {
  validate: function (movies) {

    var errors = [];

    for(var i = 0; i < movies.length; i++) {
      var movie = movies[i];
      if(movie.year == 0){
        errors.push(movie.title + " error year");
      }
    }

    return errors;
  }
};
