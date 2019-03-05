var Sequelize = require('sequelize');
var config =require('../../../conf/app');

console.log('using configuration',config)
const sequelize = new Sequelize(config.db.name,config.db.userName,config.db.password,{
	host:config.db.host,
	dialect:config.db.dialect,
	logging: console.log,
});

module.exports = sequelize;