const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} 
//for local testing fill in these details with DB info,
//but switch back when committing so no security issues
else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'ro2padgkirvcf55m.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            dialect: 'mysql',
            port: 3306
        }
    );
};

module.exports = sequelize;