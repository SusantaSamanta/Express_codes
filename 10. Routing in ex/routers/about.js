import express from "express";
const router = express.Router();

import {join} from "path";
const aboutPage = join(import.meta.dirname, "..", 'public', 'aboutPage', 'about.html');


router.get("/", (req, res) => {
    // res.send("<center><h1>........This is About page.......</h1></center>");    
    res.sendFile(aboutPage);    
});

export const aboutRoute = router;
