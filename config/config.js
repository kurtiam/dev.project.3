require("dotenv").config();
module.exports = {
    "development": {
        "username": "root",
        "password": "password",
        "database": "userdb",
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
        //     "use_env_variable": "JAWSDB_URL",
        //     "dialect": "mysql"

        "username": "kehuneyxscvi5ziz",
        "password": "lu73w1lkz4lkf20g",
        "database": "we229i36ekozs5d1",
        "host": "JAWSDB_URL",
        "port": "3306",
        "dialect": "mysql"
    },

};

