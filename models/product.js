 //////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require('mongoose');

// make PRODUCTS schema
const productsSchema = new mongoose.Schema({
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
const product = mongoose.model('product', productsSchema)
module.exports = product

