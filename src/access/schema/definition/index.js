const User = require('./user')
const Task = require('./task')
const Image = require('./image')
const Group = require('./group')
module.exports = function() {
    return [User, Task,Image,Group];
}
