import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/schema.js';
import { Query } from './resolvers/Query.js';
import { Genre } from './resolvers/Genre.js';
import { Movie } from './resolvers/Movie.js';

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
