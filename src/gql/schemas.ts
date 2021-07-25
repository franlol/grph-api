import { mergeSchemas } from "@graphql-tools/merge";
import { GraphQLSchema } from "graphql";

import userSchema from "./user/user.schema";

const schemas: GraphQLSchema = mergeSchemas({
  schemas: [
    userSchema
  ]
});

export default schemas;
