import { Router } from "express";
const route = Router();

import {join} from 'path';

let profilePage = join(import.meta.dirname, '..', 'public', 'profile.html');

route.get('/', (req, res) => {  
    res.send('<h2>This user page go : <a href="/user/profile">Profile page</a></h2>')
})

route.get("/profile", (req, res) => {   ///   this : 3010/user/profile
    res.sendFile(profilePage);
});


export const profileRoute = route;