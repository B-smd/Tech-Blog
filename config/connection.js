const Sequelize = require('sequelize');
require('dotenv').config();

/**
 * @type {Sequelize} sequelize
 */

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // remote jawsDB
  // sequelize = new Sequelize(
  //   "jyh2f5x29tsxp01h",
  //   "i4l7t0ljsys2dp9o",
  //   "cqg4dgjbgydhqir0",
  //   {	
  //     host: 'ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  //     dialect: 'mysql',
  //     port: 3306
  //   }
   
  // );

  // local database
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
   
  );

}

module.exports = sequelize;
