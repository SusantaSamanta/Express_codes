import { log } from "console";
import express from "express";
const app = express();
import {aboutRoute} from "./routers/about.js"
import { profileRoute } from './routers/user.js'

import { join } from 'path';

app.use(express.static(join(import.meta.dirname, 'public')));

app.get("/", (req, res) => {   /// this : 3010/
    // res.send("Hello this is home page.........");
});

app.use('/about', aboutRoute);   /// this : 3010/about
app.use('/user', profileRoute);  /// this : 3010/user
app.use((req,res) => {   /// this : 3010/404error
    res.status(404);
    res.sendFile(join(import.meta.dirname, 'views', '404.html'));
})



const PORT = 3010;
app.listen(PORT, () => {
    log(`server : http://localhost:${PORT}/`);
});
