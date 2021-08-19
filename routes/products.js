const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/products", async(req, res, next) => {
    try {
        const proList = await axios.get(
            "https://run.mocky.io/v3/6091c1b1-a8c8-41f2-a6f5-44db37eef06e"
        );

        const result = proList.data.map((product) => {
            product.vatRate = product.vat / 100;
            product.amountExVAT = Math.round(product.amount * product.vat);
            product.amountIncVAT = product.amount * 100 + product.amountExVAT;
            return product;
        });

        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

module.exports = router;