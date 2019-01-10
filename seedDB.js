const User = require('./Models/User');

const USERS_SEED = [
    { name: "idan", score: 15 },
    { name: "korni", score: 42 },
    { name: "efrat", score: 85 },
    { name: "kruvi", score: 115 },
];

USERS_SEED.forEach(user_mock => {
    User.create(user_mock)
    .then((createdUser) => console.log("Created User: ", createdUser))
    .catch(err => console.error(err));
});