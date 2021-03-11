// const multiply = (a, b) => a * b;

// let n = multiply(5, 8);

// console.log(n);

// const fs = require('fs');
// console.log(typeof fs);

// fs.writeFile('./hello.txt', 'Hello!', function() {
//     console.log('done creating file');
// });

const random = require('./utilities/random');

for (let i = 0; i < 10; i++) {
    console.log(random(100, 200) );
}