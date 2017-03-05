const express = require( 'express' );
const router = express.Router();
const models = require( '../db' ).models;

router.get('/', (req, res, next) => {
    models.User.mapLastNm()
        .then((userRecords) => {
            res.send(userRecords);
            //res.render('index', {title: 'Home', users: userRecords});
        })
});

module.exports = router;
