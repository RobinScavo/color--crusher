const express = require("express");
const { post } = require("../app");
const router = express.Router();
const db = require("../db/models");
const { asyncHandler } = require("../utils");

const { Player } = db;

router.get(
    "/",
    asyncHandler(async function (req, res) {
        const players = await Player.findAll({
            limit: 10,
        })
    console.log(players)
    res.send(res.json({message: players}));
}));






module.exports = router;
