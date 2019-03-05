var instance = require('../index');
var Sequelize = require('sequelize');
var BaseModel = require('./base');
var assign = require('lodash/assign');

var groupMembers = assign({}, {
	groupId:Sequelize.STRING,
	userId: Sequelize.STRING,
	joinAt: Sequelize.DATE
}, BaseModel)
const GroupMember = instance.define('GroupMember',
	groupMembers, {
		timestamps: true,
		paranoid: true,
		indexes:[{
			unique:true,
			fields:['groupId','userId']
		}]
	}
);

GroupMember.sync();


module.exports = GroupMember;