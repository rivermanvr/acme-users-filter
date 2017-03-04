const express = require( 'express' );
const app = express();
const faker = require( 'faker' );
const bodyParser = require( 'body-parser' );
const swig = require( 'swig' );
const path = require( 'path' );

swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.engine('html', 'swig.renderFile');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/css', express.static(path.join(__dirname, './css')));

app.get('/', (req, res, next) => {
    res.render('index');
});

module.exports = app;
