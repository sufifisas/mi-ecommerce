const mysql = require('mysql2');

const database = ({host, user, password, database, connectedMessage }) => {
    return (
        mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database,
        })
    );
};


module.exports = {database};