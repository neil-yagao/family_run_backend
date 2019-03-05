const Mutations = `
	type Mutations {
        addTask(task:TaskInput): String
        operateTask(taskId:String,operation:TaskOperationInput): Task
        updateTask(taskId:String,task:TaskInput): Task
        register(account:AccountInput):User 
        updateUser(userId:String, userInfo:UserInput):User
        createNewGroup(groupName:String!,creator:String!):Group
        joinGroup(groupIdentify:String!, joiner:String!):Group
    }
`;

/**
 * createNewGame(courseId:Int!, game:GameInput!):Game
 * joinGame(playerId:Int!, gameId:int!):Game
 */

module.exports = Mutations;