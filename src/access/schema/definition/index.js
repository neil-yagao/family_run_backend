const User = require('./user')
const Task = require('./task')

module.exports = function() {
    return [User, Task];
}
