const UserType = require("./TypeDefs/UserType");
const AboutType = require("./TypeDefs/AboutType");
const UserInfoType = require("./TypeDefs/UserInfoType");
const userData = require("../MOCK_DATA.json");
const aboutData = require("../MOCK_DATA2.json");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt }, email: { type: GraphQLString } },
      resolve(parent, args) {
        console.log("all users");
        if (args.id) return userData.filter((item) => item.id === args.id);
        if (args.email)
          return userData.filter((item) => item.email === args.email);
        return userData;
      },
    },
    getAllAbout: {
      type: new GraphQLList(AboutType),
      args: { id: { type: GraphQLInt }, skills: { type: GraphQLString } },
      resolve(parent, args) {
        return aboutData;
      },
    },
    getUserInfo: {
      type: new GraphQLList(UserInfoType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        if (!args.id) return;
        console.log("inside");
        let x;
        let res = userData.filter((item) => item.id === args.id);
        //console.log("res ", res);
        if (res.length === 0) return;
        for (let i = 0; i < aboutData.length; i++) {
          if (aboutData[i].id === args.id) {
            x = aboutData[i];
          }
        }
        if (x.id) {
          res[0].about = x.about;
          res[0].skills = x.skills;
          res[0].image = x.image;
        }
        return res;
      },
    },
  },
});

module.exports = RootQuery;
