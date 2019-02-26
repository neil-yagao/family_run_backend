var instance = require('../index');
var Sequelize = require('sequelize');
var BaseModel = require('./base');
var assign = require('lodash/assign');


var userTaskOperation = assign({}, {
    userId:Sequelize.STRING,
	taskId:Sequelize.STRING,
	operation:Sequelize.STRING,
	operationDate:Sequelize.STRING,
	operationTimestamp:Sequelize.STRING
}, BaseModel)
const UserTask = instance.define('User_Task_Operation',
    userTaskOperation,{
        timestamps:true,
        paranoid:true
    }
);

UserTask.sync();

module.exports = UserTask;