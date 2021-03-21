const JWTSECRET = process.env.JWTSECRET;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = {
    jwtSecret: JWTSECRET,
    mongodburi: 'mongodb+srv://' + DB_USERNAME + ':' + DB_PASSWORD + '@cluster0.zjqna.mongodb.net/basic-mern-app?retryWrites=true&w=majority'
};