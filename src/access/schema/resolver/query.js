var Tasks = require('../../../db/mysql/model/task')
var Users = require('../../../db/mysql/model/user') 
const query = {
	Query: {
		tasks(_, args) {
			let condition = {};
			condition.where = {
				...args.task
			}
			console.log('condition',condition)
			return Tasks.findAll(condition)
		},
		login(_, {
			username,
			password
		}) {
			return Users.findAll({
				where: {
					username,
					password
				}
			}).then(accounts => {
				if (accounts && accounts.length > 0) {
					return Player.findById(accounts[0].userId)
				}
				throw JSON.stringify({
					success: false,
					code: '01',
					msg: 'username or password is incorrect'
				})
			})
		}
	}
}

module.exports = query;