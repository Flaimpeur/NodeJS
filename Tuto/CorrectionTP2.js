// Exercice 9

const querystring = require('querystring');
const { EventEmitter } = require('stream');

const queryString = 'name=Vanesa&birthDate=160503'

const parsedQuery = querystring.parse(queryString)

console.log('parsed query string: ', parsedQuery)

// Exercice 10

class MyEmitter extends >EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', ()=>{
    console.log('une evenement a eu lieu!')
})

myEmitter.emit('event');