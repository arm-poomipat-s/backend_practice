const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const connectDB = require('./config/db');
const auth = require('./routes/auth');

const hospitals =  require('./routes/hospitals');

connectDB();

app.use(express.json());

app.use('/api/v1/hospitals', hospitals);
app.use('/api/v1/auth', auth);

const PORT = process.env.PORT

const server = app.listen(PORT, console.log('Server is running in', process.env.NODE_ENV, 'mode on port', PORT));

process.on(`unhandledRejection`, (err, promise)=>{
    console.log(`Error: ${err.message}`);

    server.close(()=> process.exit(1));
});