const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const AboutType = new GraphQLObjectType({
  name: "About",
  fields: () => ({
    id: { type: GraphQLInt },
    about: { type: GraphQLString },
    skills: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

module.exports = AboutType;
