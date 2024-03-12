const _ = require("lodash");

const todoTasks = [
    
];

//@desc Get all todo tasks
//@route GET /todo-list
//@access Public
exports.getTodoTasks = (req, res) => {
    res.status(200).json(todoTasks);
}

//@desc create todo tasks
//@route POST /todo-list
//@access Public
exports.createTodoTask = (req, res) =>{
    const task = req.body.task;
    todoTasks.push({id:Number(_.uniqueId()), task});
    // console.log(todoTasks);
    
    res.status(200).json({message:"Created new task!"});
}

//@desc update todo tasks
//@route put /todo-list
//@access Public
exports.updateTask = (req, res) => {
    const newTask = req.body["task"];
    const id = req.params.id;

    // console.log(newTask);
    // console.log(id);

    // console.log(todoTasks)

    if(!newTask) {
        return res.status(400).json({message: "Please add new task"});
    }

     updatedTask = todoTasks.find( todo => todo.id == id);
    //  console.log(updatedTask);
     updatedTask.task = newTask;
    //  console.log(todoTasks);

    res.status(200).json({message:"Updated task"});

}