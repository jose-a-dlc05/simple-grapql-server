import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { moviesData } from './movies.js';

const typeDefs = `#graphql
  type Movie {
    id: ID
		title: String!,
		genre: [String]!,
		releaseYear: Int!,
		rating: Float!,
		description: String!,
		cast: [String]!,
		director: [String]!,
  }

  type Query {
    movies: [Movie]
  }
`;

const resolvers = {
	Query: {
		movies: () => moviesData,
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`Server is ready at: ${url}`);
