const http = require( 'http' );
const app = require( './app' );
const acmeDB = require( './db' );
const server = http.createServer(app);
const port = process.env.PORT || 3000;

acmeDB.seed()
    .then(() => console.log('your data is seeded'))
    .catch(err => console.log(err));

server.listen(port, () => console.log(`listening on port ${port}`));
