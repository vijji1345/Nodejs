const mysql = require('mysql2');

const config = require('../config')


const getDBConn = async () => {
    try {
        conn = await mysql.createConnection(config);
        return conn;
    } catch (err) {
        console.error(err);
    }
};


module.exports = getDBConn;

