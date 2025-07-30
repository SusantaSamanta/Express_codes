
import express from 'express';
const app = express();
import path from 'path';

const dirName = import.meta.dirname;
const htmlFile = path.join(dirName, 'public', 'index.html');
const errorPage = path.join(dirName, 'views', '404.html');

app.get('/', (req, res) => {
    res.sendFile(htmlFile)
});

app.use((req, res) => {
    console.log("404 Page not fondu : ", req.url);
    return res.status(404).sendFile(errorPage);
});


const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
    console.log(`server run on : http://localhost:${PORT}/`)
})




