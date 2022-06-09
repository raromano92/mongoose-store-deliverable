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
        min: 1
    } ,
    qty: {
        type: Number,
        min: 1,
    }
})

// make product model
const Product = model("Products", productsSchema);

