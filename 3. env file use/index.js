// at fist read how npm run dev work


import express from 'express';
const app = express();

app.get('/', (req, res) => {
    return res.send(`
        <center>
            <h1 style="color: blue; font-size: 40px; margin-top: 30vh;">Hello This is home page on port ${process.env.PORT}</h1>
        </center>
    `);
});



/*  To use the PORT in .env file need to use this step: 

    1: create an .env file

    2: add this line in package.json file
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "node --env-file=.env --watch index.js"
        },

    3: use the PORT in code like this 
        const myPort = process.env.PORT; 

*/


const myPort = process.env.PORT; 
app.listen(myPort, () => {
    console.log(`server is running on http://localhost:${myPort}/`);
});
