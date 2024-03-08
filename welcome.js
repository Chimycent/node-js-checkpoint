import fs from 'fs'

// const fs = require ('fs');
fs.watchFile('welcome.txt', 'Hello Node', (err) => {
    if(err) throw err;
    console.log('Welcome.txt created successfully');
});

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data from welcome.txt:', data);
});