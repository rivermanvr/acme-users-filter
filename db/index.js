const acmeDB = require( './_conn' );
const User = require( './User' );
const faker = require( 'faker' );

const sync = (force) => {
    return acmeDB.sync({ force });
};

const addRandomUsers = (count) => {
    const promissArr = [];
    for (let i = 1; i <= count; i++){
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email();
        let lat = faker.address.latitude();
        let long = faker.address.longitude();
        let location = [lat, long];
        promissArr.push(User.create({ firstName, lastName, email, location }));
    }
    return Promise.all(promissArr);
};

const seed = (force) => sync().then(() => addRandomUsers(100));

module.exports = { models: { User }, seed, sync }
