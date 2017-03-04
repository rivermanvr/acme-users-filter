const Sequelize = require( 'sequelize' );

const connectDB = process.env.DATABASE_URL || 'postgres://localhost/acmeDB';
const acmeDB = new Sequelize(connectDB, {
    logging: false
})

module.exports = acmeDB;