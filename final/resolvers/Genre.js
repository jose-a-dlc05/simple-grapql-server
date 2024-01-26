import { moviesData } from '../db/movies.js';

export const Genre = {
	movies: (parent, args, context) => {
		const genreId = parent.id;
		const movies = moviesData.filter((movie) => movie.genreId === genreId);
		if (!genreId) return null;
		return movies;
	},
};
