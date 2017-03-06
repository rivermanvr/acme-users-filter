const acmeDB = require( './_conn' );
const User = require( './User' );
const faker = require( 'faker' );

const sync = () => {
    return acmeDB.sync({ force: true });
};

const addRandomUsers = (count) => {
    for (let i = 1; i <= count; i++){
        let firstNm = faker.name.firstName();
        let lastNm = faker.name.lastName();
        let mail = faker.internet.email();
        let lat = faker.address.latitude();
        let long = faker.address.longitude();
        let loc = [lat, long];
        User.create({ firstName: firstNm, lastName: lastNm, email: mail, location: loc });
    }
}

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

const seed = () => {
    return sync()
        .then(() => {
            return addRandomUsers(5);
        })
}

module.exports = {
    models: {
        User
    },
    mapLastNm,
    sortKeys,
    seed,
    sync,
}
