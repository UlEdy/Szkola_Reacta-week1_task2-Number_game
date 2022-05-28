prompt = require('prompt');

let randomNr = Math.floor(Math.random()*10+1);

console.log(`Choose your number from 1 to 10`);

prompt.start();

prompt.get('number', function (_err, result) {

    const userNr = parseInt(result.number);

    let message = () => {
            if (userNr < 1 || userNr > 10)
                { return msg= `Incorrect number!` };

            if (userNr >= 1 && userNr <= 10 &&  userNr === randomNr)
                 { return msg = `Success! Your number ${userNr} = compared number ${randomNr}` };

                 { return msg = `Try again! Your number ${userNr}; compared number ${randomNr}` };
            };

    console.log(message())
} );