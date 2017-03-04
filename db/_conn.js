const Sequelize = require( 'sequelize' );

const connectDB = process.env.DATABASE_URL || 'postgres://localhost/acme_sql';
const _conn = new Sequelize(connectDB, {
    logging: false
})

module.exports = _conn;
