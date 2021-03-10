const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(res.json({message: 'test index root'}));
});







module.exports = router;
