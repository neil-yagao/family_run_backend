var UserModel = require('../../../db/mysql/model/user');
var AccountModel = require('../../../db/mysql/model/account');

const mutation = {
	Mutations: {
		 register(_,{account}){
			 //:User 
			 return AccountModel.create({
				 ...account
			 }).then(newAcc=>{
				 return UserModel.create({
					 name:account.username,
					 accountId:newAcc.id,
					 headPicId:'-1'
				 })
			 })
		 },
		 updateUser(_,{userId,userInfo}){
			 return UserModel.findById(userId).then(user=>{
				 for(let key in userInfo){
					 if(userInfo.hasOwnProperty(key)){
						 user[key] = userInfo[key];
					 }
				 }
				 return user.save()
			 })
		 }
	}
}

module.exports = mutation;