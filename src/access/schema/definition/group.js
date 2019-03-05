const group = `
	type Group {
		id:String!
		identifyCode:String!
		name:String!
		createdBy:User
		members:[User]
	}
`
module.exports = group