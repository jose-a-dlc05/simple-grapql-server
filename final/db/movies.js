export const moviesData = [
	{
		id: '1',
		title: 'Inception',
		releaseYear: 2010,
		rating: 8.8,
		description: 'A thief enters the dreams of others to steal their secrets.',
		cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
		director: ['Christopher Nolan'],
		genreId: ['1100', '1300'],
	},
	{
		id: '2',
		title: 'The Shawshank Redemption',
		genre: ['Drama'],
		releaseYear: 1994,
		rating: 9.3,
		description:
			'Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.',
		cast: ['Tim Robbins', 'Morgan Freeman'],
		director: ['Frank Darabont'],
		genreId: ['1200'],
	},
	{
		id: '3',
		title: 'The Dark Knight',
		releaseYear: 2008,
		rating: 9.0,
		description:
			'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
		cast: [
			'Christian Bale',
			'Heath Ledger',
			'Aaron Eckhart',
			'Michael Caine',
			'Maggie Gyllenhaal',
			'Gary Oldman',
			'Morgan Freeman',
		],
		director: ['Christopher Nolan'],
		genreId: ['1400', '1500'],
	},
	{
		id: '4',
		title: "Schindler's List",
		releaseYear: 1993,
		rating: 8.9,
		description:
			'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
		cast: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
		director: ['Steven Spielberg'],
		genreId: ['1200', '1600'],
	},
	{
		id: '5',
		title: 'The Matrix',
		releaseYear: 1999,
		rating: 8.7,
		description:
			'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
		cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
		director: ['Lana Wachowski', 'Lilly Wachowski'],
		genreId: ['1100'],
	},
	{
		id: '6',
		title: 'Saving Private Ryan',
		releaseYear: 1998,
		rating: 8.6,
		description:
			'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
		cast: ['Tom Hanks', 'Matt Damon', 'Tom Sizemore'],
		director: ['Steven Spielberg'],
		genreId: ['1700'],
	},
	{
		id: '7',
		title: 'Back to the Future',
		releaseYear: 1985,
		rating: 8.5,
		description:
			'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
		cast: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
		director: ['Robert Zemeckis'],
		genreId: ['1800', '1900'],
	},
	{
		id: '8',
		title: 'Apocalypse Now',
		releaseYear: 1979,
		rating: 8.4,
		description:
			'A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.',
		cast: ['Martin Sheen', 'Marlon Brando', 'Robert Duvall'],
		director: ['Francis Ford Coppola'],
		genreId: ['1700'],
	},
	{
		id: '9',
		title: 'The Lives of Others',
		releaseYear: 2006,
		rating: 8.4,
		description:
			'In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.',
		cast: ['Ulrich Mühe', 'Martina Gedeck', 'Sebastian Koch'],
		director: ['Florian Henckel von Donnersmarck'],
		genreId: ['1300'],
	},
	{
		id: '10',
		title: 'Once Upon a Time in America',
		releaseYear: 1984,
		rating: 8.4,
		description:
			'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
		cast: ['Robert De Niro', 'James Woods', 'Elizabeth McGovern'],
		director: ['Sergio Leone'],
		genreId: ['1500'],
	},
];

export const genresData = [
	{
		id: '1100',
		name: 'Science Fiction',
	},
	{
		id: '1200',
		name: 'Drama',
	},
	{
		id: '1300',
		name: 'Thriller',
	},
	{
		id: '1400',
		name: 'Action',
	},
	{
		id: '1500',
		name: 'Crime',
	},
	{
		id: '1600',
		name: 'Biography',
	},
	{
		id: '1700',
		name: 'War',
	},
	{
		id: '1800',
		name: 'Adventure',
	},
	{
		id: '1900',
		name: 'Comedy',
	},
];
