const acmeDB = require( './db' );
const User = require( './User' );

module.exports = {
    models: {
        User
    },
    seed,
    sync
}