import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
    res.status(200);
});

export default router;