const acmeDB = require( './_conn.js' );

const User = acmeDB.define('user', {
    firstName: acmeDB.Sequelize.STRING,
    lastName: acmeDB.Sequelize.STRING,
    email: acmeDB.Sequelize.STRING,
    location: acmeDB.Sequelize.ARRAY(acmeDB.Sequelize.FLOAT)
}, {
    classMethods: {
        getUsers: function(){
            return this.findAll()
        }
    }
})

module.exports = User;
