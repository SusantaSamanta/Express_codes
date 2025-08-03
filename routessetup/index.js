const express = require("express");
const app = express()
const connectdb = require('./connection');
const userroutes = require('./routes/Userroute')
const PORT = 8000;


connectdb();
app.use(express.json());

app.use('/api/users',userroutes);

app.listen(PORT, () => {
    console.log(`PORT IS RUNNING ON ${PORT}`);
})