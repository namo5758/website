const express = require("express");
const req = require("express/lib/request");

const router = express.Router();

router.get('/', (request, response) => {
        response.render("home");
});

module.exports = router;