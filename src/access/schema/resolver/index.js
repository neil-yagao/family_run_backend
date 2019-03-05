const {
	merge
} = require('lodash');

const taskResolver = require('./task')
const taskMutation = require('./mutation');
const query = require('./query')
const groupQuery = require('./group-query')

const userMutation = require('./user-mutation');
const userResolver = require('./user')

const groupMutaiton = require('./group-mutation')
const groupResolve = require('./group');

module.exports = merge(taskMutation, taskResolver,
	query, groupQuery,
	userMutation, userResolver,
	groupMutaiton, groupResolve);