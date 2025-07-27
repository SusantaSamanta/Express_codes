import express from 'express';
const app = express();


app.get('/', (req, res) => {
    res.send("<center><h1>Welcome to Route parameter example</h1> please visit http://localhost:3006/profile/susanta and http://localhost:3006/admission/Susanta/document/ug this url</center>")
});

app.get('/profile/:user', (req, res) => {
    console.log(req.params);  //     http://localhost:3006/profile/susanta   for accessing this url on WB we get this < [Object: null prototype] { user: 'susanta' } > object on log
    res.send(`<h1 style=" margin-top: 20vh; color: blue; font-size: 50px; text-align: center;">Welcome ${req.params.user}</h1>
        <br><p style=" margin-top: 5vh;font-size: 30px; text-align: center;">This is an example of Route parameter</p>`);
});
app.get('/admission/:stu/document/:pending', (req, res) => {
    console.log(req.params);      //   http://localhost:3006/admission/Susanta/document/ug   for accessing this url we get this <[Object: null prototype] { stu: 'Susanta', pending: 'ug' }> log output 
    res.send(`<h1 style=" margin-top: 20vh; color: red; font-size: 50px; text-align: center;">Pending Documents </h1>
            <br>
            <p style=" margin-top: 5vh;font-size: 30px; text-align: center;">${req.params.stu} please upload your ${req.params.pending} </p>`
        );
});


             


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server run on : http://localhost:${PORT}/`)
})




