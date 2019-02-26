const RootQuery = `
  type Query {
    tasks(task:TaskInput):[Task]
	login(username:String!,password:String!):User
  }
`;

module.exports = RootQuery;