/*

//Zadanie 1

const http = require('http');

const server = http.createServer();
server.on('connection', (socket => {
   console.log('new connection');
}));

server.listen(3000);
console.info('Server is running on port 3000');
*/

//Zadanie 4
const express = require('express');
const preQuestions = require('./questions').preQuestions;
const port = require('./config');

const app = express();
console.log(preQuestions);
app.get('/api/questions', (request, response) => {
   response.send(preQuestions);
});

app.get('/api/questions/:id', (request, response) => {
    console.log(request.params.id)
    const id = request.params.id;
    response.send(preQuestions[id-1]);
 });

app.listen(port, function () {
    console.info(`Server is running at port 3000`);
   });
