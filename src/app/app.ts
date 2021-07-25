import express, { Express } from 'express';
import gqlMiddleware from '../gql/gql';

const app: Express = express();

app.use('/graphql', gqlMiddleware);

export default app;
