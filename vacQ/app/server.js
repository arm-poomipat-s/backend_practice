const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({path:'./config/config.env'});


app.use('/', (req, res) => {
    res.send("Hello")
})




const PORT=process.env.PORT;

const server = app.listen(PORT, console.log('Server is running in', process.env.NODE_ENV, 'mode on port', PORT));

process.on(`unhandledRejection`, (err, promise)=>{
    console.log(`Error: ${err.message}`);

    server.close(()=> process.exit(1));
});