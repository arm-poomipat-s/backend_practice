const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT


app.use('/', (req, res) => {
    res.send("Hello VacQ");
}) ;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});