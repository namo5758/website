const express = require("express");
const db = require("../db");
const router = express.Router();

router.get('/adminlogin', (request, response) => {
    response.render("adminlogin")
});
router.post('/adminlogin', async (request, response) => {
    let username = request.body.username;
    let password = request.body.password;
    let checkuser = await db.select("user").from("yourdatabase").where({user: username}).first();
    let checkpass = await db.select("pass").from("yourdatabase").where({pass: password}).first();
    if(checkuser === undefined){
        response.send("ไม่พบชื่อผู้ใช้นี้");
    } else {
        if(checkpass === undefined){
            response.send("รหัสผิด" + "<a href='/login'>กลับไปหน้า login</a>");
        } else {
            request.session.adminloggedin = true;
            request.session.username = request.body.username;
            response.send("welcome " + request.session.username + " <a href='/logout'>logout</a> หรือกลับไปที่ <a href='/admin'>admin</a>");
        }
    }
});


module.exports = router;
