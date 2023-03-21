const Cinema = require('../models/cinema.model');

const getCinema = async (req, res) => {
    try {
        const cinemas = await Cinema.find().populate('movies');
        return res.status(200).json(cinemas);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postCinema = async (req, res) => { 
    try {
        const newCinema = new Cinema(req.body);
        const savedCinema = await (await newCinema.save()).populate('movies');
        return res.status(201).json(savedCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putCinema = async (req, res) => { 
    try {
        const { id } = req.params;
        const newCinema = new Cinema(req.body);
        newCinema._id = id;
        const putCinema = await Cinema.findByIdAndUpdate(id, newCinema, {new: true}).populate('movies');
        if(!putCinema) return res.status(404).json({"message": "cinema not found"});
        return res.status(200).json(putCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCinema = async (req, res) => {
    try {
        const { id } = req.params;
        const cinemaDB = await Cinema.findByIdAndDelete(id).populate('movies');
        if(!cinemaDB) return res.status(404).json({"message": "cinema not found"});
        return res.status(200).json(cinemaDB);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = { getCinema, postCinema, putCinema, deleteCinema };