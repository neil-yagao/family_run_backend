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
					relatedId: user.id
				}
			})
		},
		groups(user) {
			return Image.findAll({
				where: {
					type: 'course',
					userId: user.id
				}
			}) || [];
		}
	}

};

module.exports = resolveMap;