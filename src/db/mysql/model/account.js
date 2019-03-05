var instance = require('../index');
var Sequelize = require('sequelize');
var BaseModel = require('./base');
var assign = require('lodash/assign');


var account = assign({}, {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
}, BaseModel)
const Account = instance.define('Account',
    account,{
        timestamps:true,
        paranoid:true
    }
);

Account.sync();

module.exports = Account;