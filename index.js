// const express = require('express');
// const { readFile } = require('fs');
// const { request } = require('http');

// const app = express();

// app.get('/', (request, response) => {

//     readFile('./home.html', 'utf8', (err, txt) =>{
//         console.log(txt)

//         if (err) {
//             response.status(500).send('sorry, out of order')
//         }




//     })
// });

// app.listen(process.env.PORT || 3000, () => console.log(`App available on local host 3000 `))

const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf-8;');

console.log(txt)

console.log('do this')