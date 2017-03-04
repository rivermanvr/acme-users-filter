const acmeDB = require( './_conn' );
const User = require( './User' );

module.exports = {
    models: {
        User
    },
    seed,
    sync
}