const Mutations = `
	type Mutations {
        addTask(task:TaskInput): Task
        operateTask(taskId:String,operation:TaskOperationInput): Task
        updateTask(taskId:String,task:TaskInput): Task
    }
`;

/**
 * createNewGame(courseId:Int!, game:GameInput!):Game
 * joinGame(playerId:Int!, gameId:int!):Game
 */

module.exports = Mutations;