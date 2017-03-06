const express = require( 'express' );
const router = express.Router();
const acmeDB = require( '../db' );
const models = acmeDB.models;

router.get('/', (req, res, next) => {
    let userRecords, userIndex;
    models.User.getUsers()
        .then((_userRecords) => {
            userRecords = _userRecords;
            return acmeDB.mapLastNm(userRecords);
        })
        .then((_userIndex) => {
            userIndex = _userIndex;
            return acmeDB.sortKeys(userIndex);
        })
        .then((sortedKeys) => {
            res.render('index', {title: 'Home', nav: 'all', users: userRecords, sortedKeys: sortedKeys});
        })
});

router.post('/regenerate', (req, res, next) => {
    acmeDB.seed()
        .then(() => res.redirect( '/' ))
        .catch(err => console.log(err));
});

module.exports = router;
