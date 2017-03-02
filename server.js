const server = require( 'http' ).createServer(require( './app' ));
const acmeDB = require( './db' );

tripDB.seed()
    .then(() => console.log('your data is seeded'))
    .catch( err => console.log(err));

console.log('Models: ', tripDB.models);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`listening on port ${port}`));