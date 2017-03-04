const server = require( 'http' ).createServer(require( './app' ));
const acmeDB = require( './db' );

acmeDB.seed()
    .then(() => console.log('your data is seeded'))
    .catch(err => console.log(err));

console.log('Models: ', acmeDB.models);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`listening on port ${port}`));
