require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const pokemonRouter = require('./routes/pokemon')
const cors = require('cors');
const db = require("./models");

const app = express();

app.use(cors({origin: '*' }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/pokemon', pokemonRouter)


db.connection.sync();

const PORT = 5000

app.listen(PORT, () => {
  console.log("Listen 5500 ~ ~")
}).on('error', (err) => {
  console.log('on error handler');
});

module.exports = app;
