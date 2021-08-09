const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} 
//for testing fill in the details below with JawsDB info,
//but switch back when committing so no security issues
else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_AWS_DB,
            dialect: 'mysql',
            port: 3306
        }
    );
};

module.exports = sequelize;