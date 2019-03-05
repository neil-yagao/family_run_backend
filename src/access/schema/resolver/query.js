var Tasks = require('../../../db/mysql/model/task')
var Account = require('../../../db/mysql/model/account')
var User = require('../../../db/mysql/model/user')
var Op = require('sequelize').Op;
const query = {
	Query: {
		tasks(_, {task}) {
			let condition = {};
			condition.where = {
				...task
			}
			if(task.assignTo && task.assignTo.length > 0){
				condition.where['currentAssignmentId'] = {
					[Op.in]:task.assignTo
				}
			}
			delete condition.where.assignTo;
			console.log('condition', condition)
			return Tasks.findAll(condition)
		},
		login(_, {
			username,
			password
		}) {
			return Account.findAll({
				where: {
					username,
					password
				}
			}).then(accounts => {
				if (accounts && accounts.length > 0) {
					return User.findOne({
						where: {
							accountId: accounts[0].id
						}
					})
				}
				throw JSON.stringify({
					success: false,
					code: '01',
					msg: 'username or password is incorrect'
				})
			})
		},
		findUserById(_, {
			userId
		}) {
			return User.findById(userId);
		}
	}
}

module.exports = query;