/*const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
*/

//const input = require("./user.js/index.js");



module.exports = {
  out(data, string) {
    console.log(string, data);
  }
}
  

/*
//input.prompt(`\nWhat is your name?\n`);
  
/*
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
module.exports = readline;
*/
// const prompt2 = require("")();

// prompt.start();

// prompt.get(["email"], function(err, result) {
//   if (err) {
//     return onErr(err);
//   }
//   console.log("Command-line input received:");
//   console.log("  Email: " + result.email);
// });

// function onErr(err) {
//   console.log(err);
//   return 1;
// }
// module.exports = prompt;
