const express = require( 'express' );
const router = express.Router();
const models = require( '../db' ).models;

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Home'});
});

module.exports = router;
