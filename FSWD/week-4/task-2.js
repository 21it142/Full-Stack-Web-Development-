const readline = require('readline');
const url = require('url');
const queryString =require('querystring');

// Create an interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user to enter a URL
rl.question('Enter a URL: ', (inputURL) => {
  // Parse the input URL using the url module
 // const parsedURL = url.parse(inputURL, true);
const querystringStart=inputURL.indexOf('?');
const querystring=querystringStart!==-1?inputURL.slice(querystringStart+1):'';
  // Display the parsed components
 // console.log(`Query Parameters: ${JSON.stringify(parsedURL.query)}`);
 const parsedQueryString = queryString.parse(querystring);
 console.log(parsedQueryString);
  rl.close();
});
