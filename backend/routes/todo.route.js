'use strict'

const express = require("express");
const { todoController } = require("../controllers/todo.controller");
const { idValidation } = require("../middlewares/idValidation");
// app.use("*", idValidation);
const todoRouter = express.Router();

todoRouter.route('/').get(todoController.list).post(todoController.create);

todoRouter.route('/:id')
    .all(idValidation)
    .get(todoController.read)
    .put(todoController.update)
    .patch(todoController.update)
    .delete(todoController.delete)

module.exports = {todoRouter}