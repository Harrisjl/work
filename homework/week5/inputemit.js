/*Create a program that reads a user's input and appends it to a file. Once it is saved it the reads that file to the console.
Emit Event:
When a file has been created
When a file has been written to
When a file has been read
*/
//const readline = require('readline');
//var events = require('events');

/*const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
*/

var fs = require("fs");
var data = "\nLearn Node.js with the help of well built Node.js Tutorial.";

//rl.question("What are you doing?", (answer)=>{
// write to a new file named text.txt
fs.appendFile("What is this?", data, "utf8", function(err) {
  if (err) throw err;
  // throws an error, you could also catch it here

  // success case, the file was saved
  console.log("Data is appended to file successfully");
});

/*var movement = require('movement');
var movementEmitter = new movement.MovementEmitter();

// listener #1
var movement1 = function movement1() {
    console.log('movement1 done.');
    
}

// movement #2
var movement2 = function movement2() {
    console.log('movement2 done.');
    
}

// Connect together with the function
movementEmitter.addListener('connect', movement1);

// Connect together with the function
movementEmitter.on('connect', movement2);

var movementListeners = require('movement') .MovementEmitter.listenerCount
    (movementEmitter,'connect');
console.log(movementListeners + " Movement(s) to connect movement");

// Fire the connect movement
movementEmitter.emit('connect');

// Remove the connect function
movementEmitter.removeListener('connect', movement1);
console.log("Movement1 will not move.");

// Fire the movement
movementEmitter.emit('connect');

movementListeners = require('movement').MovementEmitter.listenerCount(movementEmitter, 'connect');
console.log(movementListeners + "Movement(s) to connect movement");

console.log("Event has Ended");
*/
// Import events module
//var events = require('events');

// Create an eventEmitter object
//var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
//var connectHandler = function connected() {
// console.log('connection succesful.');

// Fire the data_received event
//eventEmitter.emit('data_received');
//}

// Bind the connection event with the handler
//eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
//eventEmitter.on('data_received', function() {
//console.log('data received succesfully.');
//});

// Fire the connection event
//eventEmitter.emit('connection');

//console.log("Program Ended.");
