const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
    res.status(500);
});

module.exports = router;
