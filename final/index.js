import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/schema.js';
import { Query, Genre, Movie } from './resolvers/index.js';

const server = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		Genre,
		Movie,
	},
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`Server is ready at: ${url}`);
