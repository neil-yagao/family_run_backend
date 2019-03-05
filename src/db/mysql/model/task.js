var instance = require('../index');
var Sequelize = require('sequelize');
var BaseModel = require('./base');
var assign = require('lodash/assign');

var task = assign({}, {
	name: Sequelize.STRING,
	title: Sequelize.STRING,
	description: Sequelize.TEXT,
	dueDate: Sequelize.STRING,
	status: Sequelize.STRING,
	createdById:Sequelize.STRING,
	currentAssignmentId:Sequelize.STRING,
	visible:{
		type:Sequelize.TINYINT,
		defaultValue:1
	}
}, BaseModel)
const Task = instance.define('Task',
	task, {
		timestamps: true,
		paranoid: true
	}
);

Task.sync();

module.exports = Task;