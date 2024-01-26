import { moviesData } from '../db/movies.js';
import { findSingleEntity } from '../utils/general.utils.js';

export const Query = {
	movies: () => moviesData,
	movie: (parent, { id }, context) => findSingleEntity(moviesData, id),
	genres: () => genresData,
	genre: (parent, { id }, context) => findSingleEntity(genresData, id),
};
