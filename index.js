import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import schema from './schema';
import schemaMap from './schema.map';

const app = express();

app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: schema
}));

app.listen(4001, () => console.log('Now browse to localhost:4001/graphiql'));
