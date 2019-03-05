const User = `
	type Account {
		id:String!
		username:String
		password:String
	}

	input AccountInput {
		username:String!
		password:String!
	}

	type User {
		id:String!
		name:String
		headPic:Image
		groups:[String]
	}

	input UserInput {
		name:String
	}
`

module.exports = User