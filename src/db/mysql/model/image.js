var instance = require('../index');
var Sequelize = require('sequelize');
var BaseModel = require('./base');
var assign = require('lodash/assign');


var image = assign({}, {
    type: Sequelize.STRING,
    relatedId:Sequelize.STRING,
	loc:Sequelize.TEXT,
    name:Sequelize.STRING,
    checkSum: Sequelize.TEXT,
	isMain:{
		type:Sequelize.BOOLEAN,
		default:false
	}
}, BaseModel)
const Image = instance.define('image',
    image,{
        timestamps:true,
        paranoid:true
    }
);

Image.sync();

module.exports = Image;