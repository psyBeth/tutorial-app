'use strict'

const mongoose = require('mongoose');
const { CustomError } = require('../errors/customError');

const mongooseConnection = async () => {
    try {
        if(!process.env.MONGODB_URL) throw new CustomError("MongoDB url is required");
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('db connected');
    } catch (error) {
        console.log("db couldn't connect");
        throw new CustomError("db connection is failed");
    }
}
module.exports = { mongooseConnection };