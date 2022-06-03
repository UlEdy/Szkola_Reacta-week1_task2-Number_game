prompt = require('prompt');

const randomNr = Math.floor(Math.random()*10+1);

console.log(`Choose your number from 1 to 10`);

prompt.start();

prompt.get('number', (_err, result) => {

    const userNr = parseInt(result.number);

    const message = () => {
            if (userNr < 1 || userNr > 10 || isNaN(userNr)) {
                return `Incorrect number!`
            }; if (userNr === randomNr) {
                return `Success! Your number ${userNr} = compared number ${randomNr}`
            };  return `Try again! Your number ${userNr}; compared number ${randomNr}`
            };

    console.log(message())
} );