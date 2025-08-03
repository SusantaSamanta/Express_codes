import express, { Router } from 'express';
const route = Router();
import { join } from 'path';
import dbTable from '../../config/DB-Connection.js';
import crypto from 'crypto';


route.use(express.static(join(import.meta.dirname, '..', '..', 'public')));
route.get('/', (req, res) => {
    res.sendFile(join(import.meta.dirname, '..', '..', 'public', 'index.html'));
});
route.use(express.urlencoded());
route.post('/signrequest', async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    const myToken = crypto.createHash("sha256").update(email).digest('hex');
    const userData = {
        name: name, email: email, password: password, key: myToken
    }
    if (await dbTable.findOne({ email: email })) {
        console.log('already have an account....');
        res.send(`<center><br><br><br><br><br>
            <h1>Already have an account in this email ${req.body.email}</h1>
            <br><br><br>
            <h2><a href="/signup">Go back to signup page</a></h2>
            </center>`);
    } else {
        dbTable.insertOne(userData);
        res.send(`<center><br><br><br><br><br>
            <h1>Welcome ${req.body.name}</h1>
            <h2>Your email : ${req.body.email}</h3>
            <br><br><br>
            <h2><a href="/">Go back to home page</a></h2>
            </center>`);
    }
})
export const Signup = route;