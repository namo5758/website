const express = require("express");
const db = require("../db");
const router = express.Router();

router.get('/register', (request, response) => {
    response.render("register");
});
router.post('/register', async (request, response) => {
    let error = request.query;
    let username = request.body.username;
    let password = request.body.password;
    let emails = request.body.email;
    try {
        await db("yourdatabase").insert({user: username, pass: password, email: emails});
        response.redirect("/login?error=สมัครสมาชิกสำเร็จ");
    } catch (error) {
        response.redirect("/register?error=ชื่อหรืออีเมลซ้ำ");
    }
});


module.exports = router;
