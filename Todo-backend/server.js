const express = require('express');
const app = express();
const todo = require('./routes/todo');
const cors = require('cors');
const db = require('./models');
const managerRoutes = require('./routes/Manager');
const branchReoutes = require('./routes/Branch');
const accountRoutes = require('./routes/Account');
const customerRoutes = require('./routes/Manager');


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/todo-list', todo);

app.use('/managers', managerRoutes);
app.use('/branchs', branchReoutes);
app.use('/accounts', accountRoutes);
app.use('/customers', customerRoutes);


// Sync Sequelize models with the database and start the server
async function startServer() {
    try {
      // Sync Sequelize models with the database
      await db.sequelize.sync();
        //{force:true} Drop table and create again
      // Start the Express server
      app.listen(8000, () => {
        console.log(`Server running on port 8000`);
      });
    } catch (error) {
      console.error('Error syncing database and starting server:', error);
    }
  }
  
  // Call the startServer function to sync models and start the server
  startServer();