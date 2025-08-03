const express = require('express')
const router = express.Router();
// const {signup} = require()

router.get('/',(req,res)=>{
    res.send("Welcome to my profile")
})
// router.post('/signup',signup)

module.exports = router;