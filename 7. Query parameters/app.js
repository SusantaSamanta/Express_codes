
//  query parameter are the key value pairs which use in url after ? mark 
//  Ex: 
//      http://localhost:3007/product?proType=mobile&prod=Iphon
//      url is http://localhost:3007/product
//             then ? mark 
//                  then key=value
//                                &otherKey=value  ( multiple keys are divide by & )
/// access query parameter we use this req.query : it give an object of this keys and values 
///     Ex: req.query.proType

//// if we don't give any query in url then req.query give empty object


import express from 'express';
const app = express();
import path from 'path';

const dirName = import.meta.dirname;
const htmlFile = path.join(dirName, 'public', 'index.html');


app.get('/', (req, res) => {
    res.sendFile(htmlFile)
});

app.get('/product', (req, res) => {
    console.log(req.query) 
    res.send(`<h1 style=" margin-top: 20vh; color: blue; font-size: 50px; text-align: center;">Welcome To Product Page</h1>
            <br>
            <p style=" margin-top: 1vh;font-size: 30px; text-align: center;">Product type : ${req.query.proType}</p> 
            <p style=" font-size: 30px; text-align: center;">Product : ${req.query.prod}</p> 
            <p style=" font-size: 30px; text-align: center;">Color : ${req.query.color}</p> 
        `); 
    });
    
    // req.query.proType // to use this we have to search in WB :-  http://localhost:3007/product?proType=mobile
    // req.query.prod // to use this we have to search in WB :-  http://localhost:3007/product?proType=mobile&prod=Iphon
    // req.query.color // to use this we have to search in WB :-  http://localhost:3007/product?proType=Mobile&prod=Samsung&color=blue

                          


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server run on : http://localhost:${PORT}/`)
})




