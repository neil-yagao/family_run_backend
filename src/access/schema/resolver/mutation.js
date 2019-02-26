var Tasks = require('../../../db/mysql/model/task')
//var Users = require('../../../db/mysql/model/user')
var UserTaskOperation = require('../../../db/mysql/model/user_task')
var instance = require('../../../db/mysql');
var moment = require('moment');
const mutation = {
	Mutations: {
		addTask(_, args) {
			return Tasks.create(args.task);
		},
		operateTask(_, {
			taskId,
			operation
		}) {
			return instance.transaction(function (t) {
				Tasks.findById(taskId).then((task) => {
					if (operation.operation.indexOf('delay') >= 0) {
						let delayDays = operation.operation.split('+')[1];
						task.dueDate = moment(task.dueDate).add(delayDays, 'days').format('YYYY-MM-DD');
					} else {
						task.status = operation.operation;
						task.dueDate = operation.operatingDate;
					}
					return task.save()
				}, {
					transaction: t
				}).then((t) => {
					let savingOperation = {
						userId: operation.operator,
						taskId: taskId,
						...operation
					}
					UserTaskOperation.create(savingOperation)
					return t
				}, {
					transaction: t
				})
			})
		},
		updateTask(_, {
			taskId,
			task
		}) {
			return Tasks.findById(taskId).then((t) => {
				for(let key in task){
					if(task.hasOwnProperty(key)){
						t[key] = task[key]
					}
				}
				return t.save();
			})
		}
	}
}

module.exports = mutation;