const Task = `
	type Task {
		id:String!
		title:String
		description:String
		dueDate:String
		status:String
		visible:Int
	}

	input TaskInput {
		title:String
		description:String
		dueDate:String
		status:String
		visible:Int
	}

	input TaskOperationInput {
		operation:String!
		operator:String!
		operatingDate:String!
		operatingTimestamp:String!
	}
`

module.exports = Task