import { genresData } from '../db/movies.js';

export const Movie = {
	genre: (parent, args, context) => {
		const genreIds = parent.genreId.map((genre) => genre);
		const genreNames = genreIds.map((genreId) => {
			const isGenreInArray = genresData.find((genre) => genre.id === genreId);
			return isGenreInArray && isGenreInArray;
		});
		if (!genreIds.length === 0) return null;
		return genreNames.map((genre) => genre);
	},
};
