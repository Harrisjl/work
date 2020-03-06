/*put the input logic and th output logic into differnt 
files and require both of them into a main file.
Make the main file callable from cli.
*/
//const entry =


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


/*const prompt = require('prompt');

prompt.start();

prompt.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
});

function onErr(err) {
    console.log(err);
    return 1;
}
*/
/*const myPromise = () => {
    const promise = new Promise((resolve, reject) => {
        const databaseQuery = true;
        let result = 'yay you resolved'
        
        if (databaseQuery) {
            resolve(result);
        }   else{
            regect('you failed!');
        }
    });
    return promise
}

myPromise()
    .then(good => {
        console.log(good);
    })
    .catch(bad => {
        console.log(bad);

    })
        


// this is an example of 
/*class Person {
    constructor(hairColor, eyeColor, name, age) {
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.name = name;
        this.age = age;

    }
}
description(){
    console.log(`${this.hairColor}, ${this.eyeColor}, ${this.name}, ${this.age}`);

}
    ]
*/

/*const myOtherFunc = () => {

}
const myFunction = function () {

}
*/
/*const carlos = function () {
    console.log('hello carlos');
}
const williams = function (cb) {
    cb();
    console.log('hello harcourt');

}
// this is wrong!
/**
williams(harcourt(carlos));
 */