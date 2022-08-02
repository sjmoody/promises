/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  // read file into something like an array
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      cb(err);
      return;
    } else {
      // break up text file into lines
      let firstArr = data.split('\n');
      // return firstArr[0];
      cb(null, firstArr[0]);
      // return (null, firstArr[0]);

    }
  });
  // get first line
  // return first line
  //

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  // TODO
  // request == needle
  request.get(url, (err, res, body) => {
    if (err) {
      console.log(err);
      cb(err);

    } else {
      // return res.statusCode;
      cb(null, res.statusCode);
    }
  });
};

// it('should accept a callback as its last argument', function(done) {
//   google.get('/').reply(200);

//   getStatusCode('https://google.com', function() {
//     // If this asserion gets called, the callback was invoked correctly
//     // Otherwise, this test will timeout after 2000ms
//     expect(true).to.equal(true);
//     done();
//   });
// });



// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
