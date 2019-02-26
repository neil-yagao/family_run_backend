const { merge } = require('lodash');

const mutation = require('./mutation');
const query = require('./query')

module.exports = merge(mutation,query);