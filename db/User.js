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
        },
        mapLastNm: function() {
            return this.getUsers()
                .then((_userRecords) => {
                    return _userRecords.reduce(function (resultObj, user) {
                        let firstLtr = user.lastName.slice(0, 1);
                        resultObj[firstLtr] = typeof resultObj[firstLtr] !== 'undefined' ? resultObj[firstLtr] + 1 : 1;
                        return resultObj;
                    }, {});
                })
                .then((_userIndexObj) => {
                    let sortedKeyArr = Object.keys(_userIndexObj).sort();
                    for (let i = 0; i < sortedKeyArr.length; i++) {
                        sortedKeyArr[i] = {id: sortedKeyArr[i], repeatVal: _userIndexObj[sortedKeyArr[i]]}
                    }
                    return sortedKeyArr;
                })

            }
    }
};

const User = acmeDB.define('user', userDefinition, userMethodDefinition);

module.exports = User;
