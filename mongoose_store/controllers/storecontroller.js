/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const express = require('express')
const ProductY = require('../models/product');
// const path = require("path");
// const app = express();
const router = express.Router();

// TESTING
// router.get('/', (req, res) => {
//     res.send('still good?')
// })

// ** INDEX ROUTE **
router.get("/store", async (req, res) => {
    // METHOD TO FIND PRODUCTS (USING IMPORTED MODEL, SETTING VARIABLE 'PRODUCTY' TO ACCESS THE MODEL)
    await ProductY.find({})
      // RENDER PRODUCTS ONCE FOUND, 'Product' IS VARIABLE ASSIGNED TO MODEL, NEEDS TO BE PASSED THRU
        .then((Product) => {
        // THIS LOOKS TO THE FOLDER THEN FILE NAME, THEN PASS MODEL VARIABLE AGAIN
        res.render("produx/index.liquid", { Product });
        })
      // SEND ERROR AS JSON IF ANY
      .catch((error) => {
        res.json({ error });
      });
  });











// SEED ROUTE
// router.get('/seed', async (req, res) => {
//     console.log("hitting route")
//     const newProducts =
//       [
//         {
//           name: 'Beans',
//           description: 'A small pile of beans. Buy more beans for a big pile of beans.',
//           img: 'https://imgur.com/LEHS8h3.png',
//           price: 5,
//           qty: 99
//         }, {
//           name: 'Bones',
//           description: 'It\'s just a bag of bones.',
//           img: 'https://imgur.com/dalOqwk.png',
//           price: 25,
//           qty: 5
//         }, {
//           name: 'Bins',
//           description: 'A stack of colorful bins for your beans and bones.',
//           img: 'https://imgur.com/ptWDPO1.png',
//           price: 7000,
//           qty: 1
//         }
//       ]
  
//     try {
//       const seedItems = await Product.create(newProducts)
//         res.send(seedItems)
//         console.log('data', seedItems)
//     }
//     catch (err) {
//       res.send(err.message)
//     }
// })


module.exports = router;

