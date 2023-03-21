const Movie = require('../models/movie.model')

const getMovie = async (req, res) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const movies = await Movie.find({ _id: id });
        return res.status(200).json(movies);
    } catch (error) {

    }
};

const getMovieByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const movies = await Movie.find({ title: title });
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getMovieByGenre = async (req, res) => {
    try {
        const { genre } = req.params;
        const movies = await Movie.find({ genre: genre });
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getMovieByYear = async (req, res) => {
    try {
        const { year } = req.params;
        const movies = await Movie.find({ year: { $gt: year } });
        return res.status(200).json(movies);
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
};

const postMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const savedMovie = await newMovie.save();
        return res.status(201).json(savedMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const newMovie = new Movie(req.body);
        newMovie._id = id;
        const updateMovie = await Movie.findByIdAndUpdate(id, newMovie, { new: true });
        if(!updateMovie) return res.status(404).json({"message": "movie not found"});
        return res.status(200).json(updateMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movieDB = await Movie.findByIdAndDelete(id);
        if(!movieDB) return res.status(404).json({"message": "movie not found"});
        return res.status(200).json(movieDB);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = { getMovie, getById, getMovieByTitle, getMovieByGenre, getMovieByYear, postMovie, putMovie, deleteMovie };