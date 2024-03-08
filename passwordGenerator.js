// const generatePassword = require('generate-password');

import generatePassword from 'generate-password'

function generateRandomPassord () {
    const password = generatePassword.generate({
        length: 10,
        numbers: true,
        symbols: true,
    });
    console.log('Random password:', password);
}

generateRandomPassord ()