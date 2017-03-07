const acmeDB = require( './_conn.js' );

const userDefinition = {
    firstName: acmeDB.Sequelize.STRING,
    lastName: acmeDB.Sequelize.STRING,
    email: acmeDB.Sequelize.STRING,
    location: acmeDB.Sequelize.ARRAY(acmeDB.Sequelize.FLOAT)
};

const userMethodDefinition = {
    classMethods: {
        getUsers: function(strLimiter){
            if (strLimiter){
                return this.findAll({
                        where: {lastName: { $like: `${strLimiter}%`}},
                        order: [
                            ['lastName', 'ASC']
                        ]
                })
            } else {
                return this.findAll({
                        order: [
                            ['lastName', 'ASC']
                        ]
                });
            }
        }
    }
};

const User = acmeDB.define('user', userDefinition, userMethodDefinition);

module.exports = User;
