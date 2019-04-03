var ImageModel = require('../../../db/mysql/model/image')

const resolveMap = {
	User: {
		headPic(user) {
			if (user.headPicId === -1) {
				return {
					id: '-1',
					loc: '/static/DefaultHead.png'
				}
			}
			return ImageModel.findOne({
				where: {
					type: "head",
					relatedId: user.id
				}
			})
		},
		avatar(user) {
			return ImageModel.findOne({
				where: {
					type: "avatar",
					relatedId: user.id
				}
			})
		}
	}

};

module.exports = resolveMap;