'use strict'

require('express-async-errors');
require('dotenv').config()
const {mongooseConnection} = require('./startup/mongooseConnection')

const express = require("express");
const PORT = process.env?.PORT || 8000;

const app = express();

app.use(require('./middlewares/errorHandler'))

mongooseConnection();

app.listen(PORT, () => console.log("Listening http://127.0.0.1:" + PORT));
