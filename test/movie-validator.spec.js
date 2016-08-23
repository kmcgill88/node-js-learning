var assert = require('chai').assert;
var validator = require('../movie-validator');

describe('Given a Movie Validator for Saving a Movie', function () {

  describe('When validating the year', function () {
    it('should permit a valid movie', function () {
      var movies = [{
        title: 'Aladdin',
        director: 'Disney',
        year: 1996
      }];

      var errors = validator.validate(movies);

      assert(errors.length == 0, 'Found an invalid error');
    });

    it('should not permit a movie with a year of 0 (zero)', function () {
      var movies = [{
        title: 'Finding Nemo',
        director: 'Disney',
        year: 0
      },
      {
        title: 'Aladdin',
        director: 'Disney',
        year: 0
      }
    ];

      var errors = validator.validate(movies);

      assert(errors.length == 2, 'Did not find one error');
      assert.deepEqual(['Finding Nemo error year','Aladdin error year'], errors);

    });

  });
});
