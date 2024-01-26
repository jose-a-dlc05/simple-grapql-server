import { moviesData } from '../db/movies.js';
import { findSingleEntity } from '../utils/general.utils.js';

export const Query = {
	movies: () => moviesData,
	movie: (parent, { id }) => findSingleEntity(moviesData, id),
	genres: () => genresData,
	genre: (parent, { id }) => findSingleEntity(genresData, id),
};
