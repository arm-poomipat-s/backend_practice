const express = require('express');
const router = express.Router();

const {getTodoTasks, createTodoTask, updateTask} = require('../controllers/todo');

router.route("/").get(getTodoTasks).post(createTodoTask);

router.route('/:id').put(updateTask);

module.exports = router;