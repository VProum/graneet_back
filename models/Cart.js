const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    name: { type: String, required: true },
    productCount: Number,
    products: [{
        id: String,
        name: String,
        description: String,
        url: String,
        amount: Number,
        vat: Number,
    }, ],
});

const Fugitive = mongoose.model("Cart", cartSchema);

module.exports = Fugitive;