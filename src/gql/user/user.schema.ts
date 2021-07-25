import { buildSchema, GraphQLSchema } from "graphql";

const userSchema: GraphQLSchema = buildSchema(`
  type Query {
    name: String
    hobbies: String
  }
`);

export default userSchema;
