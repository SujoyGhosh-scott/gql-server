const UserType = require("./TypeDefs/UserType");
const AboutType = require("./TypeDefs/AboutType");
const userData = require("../MOCK_DATA.json");
const aboutData = require("../MOCK_DATA2.json");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        ip_address: { type: GraphQLString },
      },
      resolve(parent, args) {
        //logic to update db
        userData.push({
          id: userData.length + 1,
          first_name: args.first_name,
          last_name: args.last_name,
          email: args.email,
          ip_address: args.ip_address,
        });
        return args;
      },
    },
    //update user mutation
    //add about for user, if about is already there, do not update
    //update about for user, if id not found, do not update
  },
});

module.exports = Mutation;
