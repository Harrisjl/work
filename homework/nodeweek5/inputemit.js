/*Create a program that reads a user's input and appends it to a file. Once it is saved it the reads that file to the console.
Emit Event:
When a file has been created
When a file has been written to
When a file has been read
*/

var movement = require('movement');
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