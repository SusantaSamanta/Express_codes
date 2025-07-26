/*      install express 
npm install express
    it install teh 4.21.2 version 
       but we need 5.0.0 version 
npm i express@5.0.0
    that install the 5.0.0 version 
*/

import express from 'express';
// now create instance of express 
const app = express();

/// routes methods in express
app.get('/', (request, response) => {
    response.send("Hello world this is page '/' ");  // .⭐. in express res.writeHead in automatically change in text/html, status 304
})
app.get('/about', (request, response) => {
    return response.send(`
        <center>
            <h1 style="color: blue; font-size: 40px; margin-top: 30vh;">Hello This is about page</h1>
        </center>
    `);  
});        /* .⭐. in express res.send :- it automatically set the status code amd res.writehead. But
                      in res.end  :- not automatically set the status code and res.write we need to set this manually  */



const PORT = 2000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}/`);
});




