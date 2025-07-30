import { log } from "console";
import { join } from "path";
import express from "express";
const app = express();

import { studentRoute } from "./routers/student.js";

app.get("/", (req, res) => {
    // res.sendFile(join((import.meta.dirname), 'views', 'index.html'));
    res.render('index');
});
app.use('/student', studentRoute);


// first we have to define template engine 
app.set('view engine', 'ejs');   // by this line we can run report.ejs file
// app.set('views', './views');  // we not need to write this line because this engine by default access views folder 
//                                    if we need to access the other folder except views the we need to write this line with corresponding folder name


app.use((req, res) => {
    res.sendFile(join( import.meta.dirname, 'views', '404.html'));
})



const PORT = 3011;
app.listen(PORT, () => {
    log(`server : http://localhost:${PORT}/`);
});
 