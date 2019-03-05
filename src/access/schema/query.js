const RootQuery = `
  type Query {
    tasks(task:TaskInput):[Task]
	  login(username:String!,password:String!):User
    findUserById(userId:String!):User
    getUserGroups(userId:String):[Group]
  }
`;

module.exports = RootQuery;