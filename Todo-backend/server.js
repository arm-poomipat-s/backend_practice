const express = require('express');
const app = express();
const todo = require('./routes/todo');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/todo-list', todo);

app.listen(8000, console.log('Server is running on Port 8000'));