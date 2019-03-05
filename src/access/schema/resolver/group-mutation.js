var GroupModel = require('../../../db/mysql/model/group');
var GroupMembersModel = require('../../../db/mysql/model/group_members');

const mutation = {
	Mutations: {
		createNewGroup(_, {
			groupName,
			creator
		}) {
			//:User 
			return new Promise(function (resolve, reject) {
				GroupModel.create({
					name: groupName,
					createdBy: creator,
					identifyCode: makeid()
				}).then(newGroup => {
					console.log('create new group', newGroup);
					GroupMembersModel.create({
						groupId: newGroup.id,
						userId: creator,
						joinAt: new Date()
					}).then(_ => {
						resolve(newGroup);
					})
				}).catch(reject)
			})

		},
		joinGroup(_, {
			groupIdentify,
			joiner
		}) {
			return new Promise(function (resolve, reject) {
				GroupModel.findOne({
					where: {
						identifyCode: groupIdentify
					}
				}).then(find => {
					if (!find) {
						reject({
							sucess: false,
							errorCode: 404
						})
					}
					GroupMembersModel.create({
						groupId: find.id,
						userId: joiner,
						joinAt: new Date()
					}).then(_ => {
						resolve(find);
					}).catch(reject)
				}).catch(reject)
			})
		}
	}
}


function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 8; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}


module.exports = mutation;