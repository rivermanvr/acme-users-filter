const express = require( 'express' );
const router = express.Router();
const models = require( '../db' ).models;

router.get('/', (req, res, next) => {
    console.log(models.User.mapLastNm);
    models.User.mapLastNm()
        .then((userRecords) => {
            res.render('index', {title: 'Home', users: userRecords});
        })
});

module.exports = router;
