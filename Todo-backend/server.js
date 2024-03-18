const express = require('express');
const app = express();
const todo = require('./routes/todo');
const cors = require('cors');
const db = require('./models');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/todo-list', todo);

// Sync Sequelize models with the database and start the server
async function startServer() {
    try {
      // Sync Sequelize models with the database
      await db.sequelize.sync();
  
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