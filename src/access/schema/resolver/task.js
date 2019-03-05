var UserModel = require('../../../db/mysql/model/user')

const resolveMap = {
	Task: {
		createdBy(task) {
			if (!task.createdById ) {
				throw "not found"
			}
			return UserModel.findByPk(task.createdById)
		},
		currentAssignment(task) {
			if (!task.currentAssignmentId ) {
				throw "not found"
			}
			return UserModel.findByPk(task.currentAssignmentId)
		}
	}
};

module.exports = resolveMap;