const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/products", async(req, res, next) => {
    res.status(200).json("coucou");
});

module.exports = router;