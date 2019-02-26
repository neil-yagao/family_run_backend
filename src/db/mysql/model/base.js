var Sequelize = require('sequelize');
module.exports = {
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		defaultValue: Sequelize.DataTypes.UUIDV1
	},
	extraString:{
		type:Sequelize.STRING
	},
	extraJSON:{
		type:Sequelize.JSON
	},
	isActive:{
		type:Sequelize.BOOLEAN,
		default:true
	}
};