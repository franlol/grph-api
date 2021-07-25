import app from './src/app/app';

const main = () => {
  app.listen(3000, () => {
    console.log('Running a GraphQL API server at http://localhost:3000/graphql');
  });
}

main();
