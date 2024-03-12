'use strict'

const mongoose = require('mongoose')

const mongooseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('db connected');
    } catch (error) {
        console.log("db couldn't connect");
        throw new CustomError("db connection is failed");
    }
}
module.exports = { mongooseConnection };