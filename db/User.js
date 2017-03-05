const acmeDB = require( './_conn.js' );

const User = acmeDB.define('user', {
    firstName: acmeDB.Sequelize.STRING,
    lastName: acmeDB.Sequelize.STRING,
    email: acmeDB.Sequelize.STRING,
    location: acmeDB.Sequelize.ARRAY(acmeDB.Sequelize.FLOAT)
}, {
    classMethods: {
        getUsers: function(strLimiter){
            if (strLimiter){
                return this.findAll({
                        where: {lastName: { $like: `${strLimiter}%`}}
                })
            } else {
            return this.findAll()
            }
        }
    }
})

module.exports = User;
