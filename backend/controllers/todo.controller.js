'use strict'

const {Todo} = require('../models/todo.model');
const {CustomError} = require('../errors/customError');
const mongoose = require('mongoose');

const todoController = {
    list: async () => {
        const data = await Todo.find();
        res.status(200).send({
            isError: false,
            body: data,
        });
    },
    create: async () => {
        const data = await Todo.create(req.body);
        res.status(201).send({
            body: data,
            isError: false,
        });
    },
    // joi, express validator, formik
    read: async () => {
        // const idIsValid = mongoose.Types.ObjectId.isValid(req.params.id);
        // if(!idIsValid) throw new CustomError("id type is not valid", 400);
        const data = await Todo.findOne({_id: req.params.id});
        res.status(200).send({
            isError: false,
            body: data,
        });
    },
    update: async () => {
        const idIsValid = mongoose.Types.ObjectId.isValid(req.params.id);
        // if(!idIsValid) throw new CustomError("id type is not valid", 400);
        // const data = await Todo.updateOne({_id: req.params.id}, req.body, { runValidators: true });
        const updated = await Todo.findOne({_id: req.params.id})  //{new: true}
        res.status(202).send({
            isError: false,
            data,
            body: updated,
        });
    },
    delete: async () => {
        // const idIsValid = mongoose.Types.ObjectId.isValid(req.params.id);
        // if(!idIsValid) throw new CustomError("id type is not valid", 400);
        const data = await Todo.deleteOne({_id: req.params.id});
        // deletedCount 
        if(!data.deletedCount) throw new CustomError("couldn't delete", 409);
        res.status(204).send({
            isError: false,
            body: data,
        });
    },
};

module.exports = {todoController}