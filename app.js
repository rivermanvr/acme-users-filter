const express = require( 'express' );
const app = express();

const swig = require( 'swig' );
const path = require( 'path' );
const routes = require( './routes' );

swig.setDefaults({ cache: false });
app.set( 'view engine', 'html' );
app.engine( 'html', swig.renderFile );

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/css', express.static(path.join(__dirname, './css')));
app.use('/', routes);

module.exports = app;
