 //////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection");

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make PRODUCTS schema
const productsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    img: String,
    price: {
        type: Number,
        min: 0,
    } ,
    qty: {
        type: Number,
        min: 0,
    }
})

// make product model, "Producter" will be what the collection in mongo is named
const Product = model("Producter", productsSchema);

module.exports = Product;

