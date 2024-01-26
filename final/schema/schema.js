export const typeDefs = `#graphql
  type Movie {
    id: ID
		title: String!,
		releaseYear: Int!,
		rating: Float!,
		description: String!,
		cast: [String]!,
		director: [String]!,
		genre: [Genre!]!
  }

	type Genre {
		id: ID!
		name: String
		movies: [Movie!]!
	}

  type Query {
    movies: [Movie!]
		movie(id: ID!): Movie
		genres: [Genre!]
		genre(id: ID!): Genre
  }
`;
