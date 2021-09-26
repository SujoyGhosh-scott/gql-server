const RootQuery = require("./queries");
const Mutation = require("./mutations");
const graphql = require("graphql");

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
