const express = require("express");
const router = express.Router();

router.get('/logout', (request, response) => {
    request.session.destroy();
    response.redirect('/');
});

module.exports = router;