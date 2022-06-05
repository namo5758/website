const express = require("express");
const async = require("hbs/lib/async");
const db = require("../db");

const router = express.Router();


router.get('/admin', (request, response) => {
    if(request.session.adminloggedin){
        let username = request.session.username
        response.render("admin" , {username})
    } else {
        response.redirect("/adminlogin")
    }
});
router.get('/admin/dashboard', async (request, response) => {
    if(request.session.adminloggedin){
        let item = [];
        item = await db.select('ad','num','i1','username').from('yourdatabase');
        response.render("dashboard", {item})
    } else {
        response.redirect("/adminlogin")
    }
});


module.exports = router;
