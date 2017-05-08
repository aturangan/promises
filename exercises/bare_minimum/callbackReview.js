/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function(error, data) {
    if (error) {
      callback(error, null);
    } else {
      var result = data.split('\n')[0];
      callback(null, result); 
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.statusCode);
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};







































// var fs = require('fs');
// var request = require('request');

// // This function should retrieve the first line of the file at `filePath`
// var pluckFirstLineFromFile = function (filePath, callback) {
//   fs.readFile(filePath, 'utf8', function(err, content) {
//   	if (err) {
//   	  callback(err, null);
//   	} else {
//   	  var result = content.split('\n')[0];
//   	  callback(null, result); 
//     }
//   });
// }

// // This function should retrieve the status code of a GET request to `url`
// var getStatusCode = function (url, callback) {
//  request.get(url, function(err, response, body){
//  	if (err) { return callback(err, null); }
//  	callback(null, response.statusCode);
//  });
// }
// // Export these functions so we can test them and reuse them in later exercises
// module.exports = {
//   getStatusCode: getStatusCode,
//   pluckFirstLineFromFile: pluckFirstLineFromFile
// };
