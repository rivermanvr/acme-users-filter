const express = require( 'express' );
const app = express();
const faker = require( 'faker' );

app.get('/', (req, res, next) => {
    res.send(console.log('hello'));
});

module.exports = app;
