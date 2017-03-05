const acmeDB = require( './_conn.js' );

const User = acmeDB.define('user', {
    firstName: acmeDB.Sequelize.STRING,
    lastName: acmeDB.Sequelize.STRING,
    email: acmeDB.Sequelize.STRING,
    location: acmeDB.Sequelize.ARRAY(acmeDB.Sequelize.FLOAT)
}, {
    classMethods: {
        mapLastNm: function () {
            return this.findAll();
        }
    }
})



//             firstLtrArr.push(lastNm.slice(0, 1));

//     return firstLtrArr.reduce(function (resultObj, firstLtr) {
//         resultObj[firstLtr] = typeof resultObj[firstLtr] !== 'undefined' ? resultObj[firstLtr] + 1 : 1;
//         return resultObj;
//     }, {});

// }
module.exports = User;
