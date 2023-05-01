const express = require('express');
const { connect } = require('./src/utils/database');
const routerMovie = require('./src/api/routes/movie.router');
const routerCinema = require('./src/api/routes/cinema.router');
const routerUser = require('./src/api/routes/user.router');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 7000;

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/movies', routerMovie);
app.use('/cinemas', routerCinema);
app.use('/user', routerUser);

app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`))

