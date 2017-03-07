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



                                const mapLastNm = function (usersAll) {
                                            return usersAll.reduce(function (resultObj, user) {
                                                let firstLtr = user.lastName.slice(0, 1);
                                                resultObj[firstLtr] = typeof resultObj[firstLtr] !== 'undefined' ? resultObj[firstLtr] + 1 : 1;
                                                return resultObj;
                                            }, {});
                                }

                                const sortKeys = (obj) => {
                                    let sortedKeyArr = Object.keys(obj).sort();
                                    for (let i = 0; i < sortedKeyArr.length; i++) {
                                        sortedKeyArr[i] = {id: sortedKeyArr[i], repeatVal: obj[sortedKeyArr[i]]}
                                    }
                                    return sortedKeyArr;
                                }

            }
    }
};

const User = acmeDB.define('user', userDefinition, userMethodDefinition);

module.exports = User;
