var Definition = require( './definition/');

const resolveMap = require('./resolver');
const RootQuery = require('./query');
const Mutation = require('./mutation');

var makeExecutableSchema =  require('graphql-tools').makeExecutableSchema;

const SchemaDefinition = `
  schema {
    query: Query
    mutation:Mutations
  }
`;


module.exports = makeExecutableSchema({
    typeDefs: [SchemaDefinition, RootQuery, Mutation,Definition],
    resolvers: resolveMap,
  })