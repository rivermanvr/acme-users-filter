const express = require( 'express' );
const router = express.Router();
const acmeDB = require( '../db' );
const models = acmeDB.models;

router.use('/', (req, res, next) => {
    models.User.mapLastNm()
        .then(_sortedKeys => {
            res.locals.sortedKeys = _sortedKeys;
        }).then(() => next());
});

router.get('/', (req, res, next) => {
    models.User.getUsers()
        .then((userRecords) => {
            res.render('index', {title: 'Home', nav: 'all', users: userRecords});
        })
        .catch((err) => console.log(err));
});

router.get('/users/filter/:letter', (req, res, next) => {
    let letterFilter = req.params.letter;
    models.User.getUsers(letterFilter)
        .then((userRecords) => {
            res.render('index', {title: 'Acme Filter', nav: letterFilter, users: userRecords});
        })
        .catch((err) => console.log(err));
});

router.post('/regenerate', (req, res, next) => {
    acmeDB.seed()
        .then(() => res.redirect( '/' ))
        .catch(err => console.log(err));
});

module.exports = router;
