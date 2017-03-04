const acmeDB = require( './_conn' );
const User = require( './User' );
const faker = require( 'faker' );

const sync = () => {
    return acmeDB.sync({ force: true });
};

const seed = () => {
    return sync();
}

module.exports = {
    models: {
        User
    },
    seed,
    sync
};
