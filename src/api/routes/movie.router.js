const express = require("express");

const router = express.Router();

const { 
    getMovie, 
    getById, 
    getMovieByTitle, 
    getMovieByGenre, 
    getMovieByYear, 
    postMovie, 
    putMovie, 
    deleteMovie } = require("../controllers/movie.controller");

router.get("/", getMovie);
router.get("/id/:id", getById);
router.get("/title/:title", getMovieByTitle);
router.get("/genre/:genre", getMovieByGenre);
router.get("/year/:year", getMovieByYear);
router.post("/", postMovie);
router.put("/:id", putMovie);
router.delete("/:id", deleteMovie);

module.exports = router;