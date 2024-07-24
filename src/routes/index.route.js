const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
        res.render("../public/views/index");
})

router.get('/register', (req, res) => {
        res.render("../public/views/register");
})

router.get('/login', (req, res) => {
        res.render("../public/views/login");
})

module.exports = router;