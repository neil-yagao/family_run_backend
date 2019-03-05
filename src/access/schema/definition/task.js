const Task = `
	type Task {
		id:String!
		title:String
		description:String
		dueDate:String
		status:String
		visible:Int
		createdBy:User
		currentAssignment:User
	}

	input TaskInput {
		title:String
		description:String
		dueDate:String
		status:String
		visible:Int
		createdBy:String
		assignTo:[String]
	}

	input TaskOperationInput {
		operation:String!
		operator:String!
		target:String
		operatingDate:String!
		operatingTimestamp:String!
	}
`

module.exports = Task