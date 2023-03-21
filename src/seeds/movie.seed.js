const mongoose = require('mongoose');

const Movie = require('../api/models/movie.model');

const movies = [
    {
        title: 'The Matrix',
        director: 'Hermanas Wachowski',
        year: 1999,
        genre: 'Acción',
    },
    {
        title: 'The Matrix Reloaded',
        director: 'Hermanas Wachowski',
        year: 2003,
        genre: 'Acción',
    },
    {
        title: 'Buscando a Nemo',
        director: 'Andrew Stanton',
        year: 2003,
        genre: 'Animación',
    },
    {
        title: 'Buscando a Dory',
        director: 'Andrew Stanton',
        year: 2016,
        genre: 'Animación',
    },
    {
        title: 'Interestelar',
        director: 'Christopher Nolan',
        year: 2014,
        genre: 'Ciencia ficción',
    },
    {
        title: '50 primeras citas',
        director: 'Peter Segal',
        year: 2004,
        genre: 'Comedia romántica',
    },
];

mongoose.connect('mongodb://127.0.0.1:27017/movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( async () => {
    const moviesDB = await Movie.find();
    if(moviesDB.length > 0) await Movie.collection.drop()
    console.log('Las películas de la base de datos han sido borradas');
})
.catch((error) => {
    console.log(`Error al borrar las películas de la base de datos: ${error}`);
})
.then( async () => {
    const moviesMapped = movies.map((movie) => new Movie(movie));
    await Movie.insertMany(moviesMapped);
    console.log('Películas insertadas correctamente en la base de datos');
})
.catch((error) => {
    console.log(`Error al insertar las películas de la base de datos: ${error}`)
})
.finally(() => {
    mongoose.disconnect();
})

