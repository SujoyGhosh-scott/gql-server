const UserType = require("./TypeDefs/UserType");
const AboutType = require("./TypeDefs/AboutType");
const userData = require("../MOCK_DATA.json");
const aboutData = require("../MOCK_DATA2.json");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLList } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        //if id and email is given, filter by id and email
        //else if only id is given, filter by id
        //else if email is given, filter by email
        // else return all data
        return userData;
      },
    },
    getAllAbout: {
      type: new GraphQLList(AboutType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return aboutData;
      },
    },
  },
});

module.exports = RootQuery;
