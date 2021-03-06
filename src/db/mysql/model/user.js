var instance = require('../index');
var Sequelize = require('sequelize');
var BaseModel = require('./base');
var assign = require('lodash/assign');


var user = assign({}, {
    name: Sequelize.STRING,
    accountId: Sequelize.STRING,
	headPicId:Sequelize.STRING,
}, BaseModel)
const User = instance.define('User',
    user,{
        timestamps:true,
        paranoid:true
    }
);

User.sync();

module.exports = User;