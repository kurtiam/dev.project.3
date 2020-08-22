require("dotenv").config();

module.exports = {
    "development": {
        "username": "root",
        "password": "password",
        "database": "kurtdb",
        "host": "localhost",
        "port": "3306",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": "password",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
};