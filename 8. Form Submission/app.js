

import express from 'express';
const app = express();
import path from 'path';

const dirName = import.meta.dirname;
const htmlFile = path.join(dirName, 'public', 'index.html');


app.get('/', (req, res) => {
    res.sendFile(htmlFile)
});


/*    ⭐   by get method receive form data   ⭐

app.get('/product', (req, res) => {
    console.log(req.query) // this get an objet which send by the form action="/product"
    // this is an query url hit by the 'form action' where req objects are query parameter like :-   http://localhost:3008/product?type=Mobile&name=Iphon&color=red
    // in form action="/product" give an object as 'req' where key is the name='value' of form elements 
    
    //////// here by get method we can see the request ulr 
    ///// To hide the sensitive value in the query ulr we use :
    /////                              post method ex plain it below by app.post()
    
    res.send(`<h1 style=" margin-top: 20vh; color: blue; font-size: 50px; text-align: center;">Welcome To Product Page</h1>
            <br>
            <p style=" margin-top: 1vh;font-size: 30px; text-align: center;">Product type : ${req.query.type}</p> 
            <p style=" font-size: 30px; text-align: center;">Product : ${req.query.name}</p> 
            <p style=" font-size: 30px; text-align: center;">Color : ${req.query.color}</p> 
            `);
});
            
    */
           
           
//     ⭐   by post method receive form data   ⭐


app.use(express.urlencoded());
app.post('/product', (req, res) => {
    console.log(req.body);  // not directly access the data of body we have to use one express middleware urlencoded()
           
    /// this not an query request thats why query url not show any data in url to the uer  

    res.send(`<h1 style=" margin-top: 20vh; color: blue; font-size: 50px; text-align: center;">Welcome To Product Page</h1>
            <br>
            <p style=" margin-top: 1vh;font-size: 30px; text-align: center;">Product type : ${req.body.type}</p> 
            <p style=" font-size: 30px; text-align: center;">Product : ${req.body.name}</p> 
            <p style=" font-size: 30px; text-align: center;">Color : ${req.body.color}</p> 
        `);
    
})


//// ⭐⭐  if we want to send form name (key) using nested object then we have use like this way  
//     app.use(express.urlencoded({extended:true}));   ⭐⭐
//  in form we use like this way  name="pro[type]"
//                                name="pro[color]"  like this

// then the body object will by like this : { pro: { type: 'mobile', name: 'mi', color: 'red' } }




const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(`server run on : http://localhost:${PORT}/`)
})




