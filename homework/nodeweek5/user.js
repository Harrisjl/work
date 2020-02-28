const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

module.exports = {
    prompt(prompt) {
        rl.setPrompt(prompt);
        rl.prompt();
    },
    in(cb, string) {
        rl.on('line', function (input) {
            cb(input, string);
        })
    }
}







/*const prompt2 = require('')();

prompt.start();

prompt.get(['username'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
});

function onErr(err) {
    console.log(err);
    return 1;
};
module.exports = prompt;

const
*/
