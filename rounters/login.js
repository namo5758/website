const express = require("express");
const db = require("../db");
const router = express.Router();

router.get('/login', (request, response) => {
    let { error } = request.query;
    console.log(error)
    response.render("login",{error});
});
router.post('/login', async (request, response) => {
    let username = request.body.username;
    let password = request.body.password;
    let checkuser = await db.select("user").from("mybot.justauser").where({user: username}).first();
    let checkpass = await db.select("pass").from("mybot.justauser").where({pass: password}).first();
    if(checkuser === undefined){
        response.send("ไม่พบชื่อผู้ใช้นี้");
    } else {
        if(checkpass === undefined){
            response.send("รหัสผิด" + "<a href='/login'>กลับไปหน้า login</a>");
        } else {
            request.session.loggedin = true;
            request.session.username = request.body.username;
            response.send("welcome " + request.session.username + " <a href='/logout'>logout</a> หรือกลับไปที่ <a href='/'>home</a>");
        }
    }
});


module.exports = router;