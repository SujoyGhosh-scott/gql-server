const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const UserInfoType = new GraphQLObjectType({
  name: "UserInfo",
  fields: () => ({
    id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    ip_address: { type: GraphQLString },
    skills: { type: GraphQLString },
    about: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

module.exports = UserInfoType;
