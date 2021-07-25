import { Request, Response } from "express";
import { graphqlHTTP, } from "express-graphql";

import resolvers from "./resolvers";
import schemas from './schemas';

declare type Middleware = (request: Request, response: Response) => Promise<void>;

const gqlMiddleware: Middleware = graphqlHTTP({
  schema: schemas,
  rootValue: resolvers,
  graphiql: true,
})

export default gqlMiddleware;
