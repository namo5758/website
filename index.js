const express = require("express");
const hbs = require('hbs');
const app = express();
// กำหนดหน้าที่จะโชว์
const HomeRounter = require('./routers/Home');
const StoreRounter = require('./routers/store');
const adminloginRounter = require('./routers/adminlogin');
const logoutRounter = require('./routers/logout');
const adminRounter = require('./routers/admin');
const loginRounter = require('./routers/login');
const registerRounter = require('./routers/register');
//config เฉยไม่มีอะไร
const dotenv = require("dotenv").config();
const port = process.env.APP_PORT; 
const session = require("express-session");
//เกี่ยวกับ cookie
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(session({
	secret: 'namo5758',
	resave: true,
	saveUninitialized: true
}));
// ทำให้รับค่าจาก form ได้
app.use(express.urlencoded({ extended: true }));
// เอาไว้โชว์หน้าhtml
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');
app.use('/static', express.static('static'));
// กำหนดหน้าที่จะโชว์
app.use('/', HomeRounter);
app.use('/', StoreRounter);
app.use('/', adminloginRounter);
app.use('/', logoutRounter);
app.use('/', adminRounter);
app.use('/', loginRounter);
app.use('/', registerRounter);
app.listen(port, () => {
    console.log(`รันเว็ปละ http://localhost:${port}`);
});
