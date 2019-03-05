var instance = require('../index');
var Sequelize = require('sequelize');
var BaseModel = require('./base');
var assign = require('lodash/assign');

var group = assign({}, {
	identifyCode: {
		type: Sequelize.STRING,
		unique: true
	},
	name: Sequelize.STRING,
	createdBy: Sequelize.STRING
}, BaseModel)
const Group = instance.define('Group',
	group, {
		timestamps: true,
		paranoid: true
	}
);

Group.sync();

module.exports = Group;