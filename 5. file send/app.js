import express from 'express';
const app = express();
import { readFile } from 'fs/promises';
import path from 'path';
import { json } from 'stream/consumers';

const myDir = import.meta.dirname   // (import meta from 'meta'; this is wrong )
const myFile = import.meta.filename
// console.log(__dirname)  in ES module this __dirname not working 

// console.log(myDir)
// console.log(myFile)
// console.log(path.join("pubic","index.html"));
let htmlFilePath = path.join(myDir,"public","index.html")
// console.log(htmlFilePath);

const file = await readFile(htmlFilePath, 'utf-8')
// console.log(file)

/*       ⭐ way 1 to send file to frontend
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(file);
});
*/

/*       ⭐ way 2 to send file to frontend
app.get('/', (req, res) => {
    res.send(file)
});     
        using sendFile() function where we directly 
        send the file path and we can't need to read it  
*/


/*      ⭐ way 3 to send file to frontend
app.get('/', (req, res) => {
    res.sendFile(htmlFilePath)    // htmlFilePath = path.join(myDir,"public","index.html")
});     
//   but in this way we can send only one file, mean we can't send css file and any other files

*/



///     ⭐ way 4 to send file to frontend using express middleware 

// app.use(express.static("public"))   // use the absolute path for public folder 
app.use(express.static(path.join(import.meta.dirname, 'public')));
app.use('/about',express.static("public"))  

app.get('/', (req, res) => {
    // res.sendFile(htmlFilePath);
})

app.get('/urlData', (req, res) => {
    // res.sendFile(htmlFilePath);
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({data: `This page run on the server : http://localhost:${process.env.PORT}/ `}));
})


 


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server run on : http://localhost:${PORT}/`)
})




