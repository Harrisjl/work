/*Put the input logic and the output logic into
different files and require both of them into a main file.
Make the main file callable from the cli.
*/

// I am really stuck. Can't figure out how to make work. I will try again tomorrow.

/*const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
*/

const input = require("./user");
const output = require("./email");

let promise = new Promise(function (resolve) {
    
 input.prompt("what is your username?\n");
    input.in(output.out, "Your username is");
})

input.prompt("What is your email?\n");
// output.prompt(output.out, 'Your username is');
input.in(output.out, "Your email is");

//input.in(output.out);

// module.exports = {
//     prouser(data) {
//         console.log(`Your user name is ${userName}.`);
//         prouser.prompt(`\nWhat is your userName?\n`);
//     }
// }
// module.exports = {
//     promptsemail(email) {
//         console.log('Your email is ${email}.');
//         promptsemail.prompt(`\nWhat is your email?\n`);
//     }
// }

/*module.exports = function () {
    this.sum = function (a, b) {
        return a + b
    };

var prouser = require('./prouser');
var databaseUserName = '+ result.username';
var proemail = require('./proemail');
var databaseEmail = '+ result.email';
var usernameemail = prouser.concatenateNames(databaseUserName, databaseEmail);
    module.exports =
    {
        concat(['/prouser', '/proemail', ];
        function(err) {
            if (err) throw err
            console.log('done');
            
        } )
    



//const prompts2, prompts3 = require("./prompts2.js, ./prompts3.js");

//app2();*/
