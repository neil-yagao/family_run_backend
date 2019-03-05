var instance = require('../../../db/mysql/index')
var UserModel = require('../../../db/mysql/model/user');

const resolveMap = {
	Group: {
		createdBy(group) {
			return UserModel.findById(group.createdBy);
		},
		members(group) {
			return instance.query(
				`select u.* from GroupMembers gm , Users u where u.id = gm.userId and gm.groupId = :groupId
				`, {
					replacements: {
						groupId: group.id
					},
					type: instance.QueryTypes.SELECT
				});
		}
	}

};

module.exports = resolveMap;