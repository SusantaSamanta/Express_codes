import { log } from 'console';
import { Router } from 'express';
const router = Router();


let details = {
    name: "Susanta",
    roll: 29,
    sub: 'javaScript',
    mark: 70
}

router.get('/', (req, res) => {
    res.send(`Hello this id student page : <a href="/student/report">Student report</a>`);
});


router.get('/report', (req, res) => {
    // res.render('report', { name: "Susanta"});     // render report.ejs file in views folder     by this line :=- app.use('view engine', 'ejs')
    res.render('report', { details });
});
export const studentRoute = router;


/*

-: Escaped :-                                                                       
res.render('report', {name : "Susanta"});   <h1> <%= name %> </h1>              
                                output:       <h1> Susanta </h1>
                                
                                
-: Unescaped :-     where we can able to use html                         
res.render('report', {name : "<b>Susanta</b>"});   <h1> <%- name %> </h1>           if    <h1> <%= name %> </h1>
                                output:              <h1> Susanta </h1>                       <h1> <b> Susanta </b> </h1>
                                                            👆  where <b> tag                       where <b> tag not                      
                                                                applied                             applied in ejs file
                                                                 


*/