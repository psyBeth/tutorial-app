'use strict'

const express = require("express");
const { todoController } = require("../controllers/todo.controller");
const todoRouter = express.Router();

todoRouter.route('/').get(todoController.list).post(todoController.create);

todoRouter.route('/:id')
    .get(todoController.read)
    .put(todoController.update)
    .patch(todoController.update)
    .delete(todoController.delete)

module.exports = {todoRouter}