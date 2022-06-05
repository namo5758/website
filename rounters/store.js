const { request } = require("express");
const express = require("express");
const req = require("express/lib/request");
const async = require("hbs/lib/async");
const db = require("../db");

const router = express.Router();

router.get('/store', async (request, response) => {
    if(request.session.loggedin || request.session.adminloggedin){
        let { error } = request.query;
        response.render('store', {error});
    } else {
        response.redirect('/login?error=กรุณาเข้าสู่ระบบ');
    }
});
router.get('/store/1', async (request, response) => {
    if(request.session.loggedin || request.session.adminloggedin){
        let { error } = request.query;
        response.render('storeid', { error });
    } else {
        response.redirect('/login?error=กรุณาเข้าสู่ระบบ');
    }
});
router.post('/store/1', async (request, response) => {
    let { item1 } = request.body;
    let number = request.body.number;
    let addres = request.body.address;
    let user = request.session.username;
    console.log(item1);
    if(item1 === undefined){
        response.redirect('/store/1?error=กรุณาเลือกสินค้า');
    } else {
        await db.from('mybot.store').insert({num: number, ad: addres, i1: item1, username: user});
        response.redirect('/store?error=สำเร็จ');
    }
});

module.exports = router;