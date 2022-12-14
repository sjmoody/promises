/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var pc = require('./promiseConstructor.js');
var ps = require('./promisification.js');

// get username from file  pluckFirstLineFromFileAsync(filePath)
// getGitHubProfileAsync(user, callback) gets gh profile from user
// writeFilePath

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return new Promise((resolve, reject) => {

    pc.pluckFirstLineFromFileAsync(readFilePath)
      .then((firstLine) => {
        // firstLine is available
        return ps.getGitHubProfileAsync(firstLine);
        // console.log('firstLine: ', firstLine);
      })
      .then((data) => {
        resolve(pc.writeToFileAsync(writeFilePath, data));
        // console.log('data returned to the promise: ', data);
      })
      .catch((err) => {
        reject(console.log('error from getGithubProfileAsync: ', err));
      });
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
