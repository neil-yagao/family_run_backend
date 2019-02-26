const User = `
	type User {
		id:String!
		name:String
		username:String
		password:String
	}

	input AccountInput {
		name:String!
		username:String!
		password:String!
	}
`

module.exports = User