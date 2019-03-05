var instance = require('../../../db/mysql/index')

const query = {
	Query: {
		getUserGroups(_, {
			userId
		}) {
			return instance.query(
				`select g.* from GroupMembers gm , Groups g where g.id = gm.groupId and gm.userId = '${userId}'
				`, {
					type: instance.QueryTypes.SELECT
				});
		}
	}
}

module.exports = query;