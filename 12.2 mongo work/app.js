import express from 'express';
const app = express();
import {Signup} from './routers/auth/signUp.js';



app.get('/', (req, res) => {
    res.send("<h1>Hello this is home page</h1>")
});

app.use('/signup', Signup);


const PORT = 3012;
app.listen(PORT, () => {
    console.log(`server : http://localhost:${PORT}/`);
});
