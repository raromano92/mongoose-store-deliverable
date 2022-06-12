/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const express = require('express');
const product = require('../models/product');
// const path = require("path");
// const app = express();
const router = express.Router();

// ** INDEX ROUTE **
router.get('/', async (req, res) => {
	// METHOD TO FIND PRODUCTS (USING IMPORTED MODEL, SETTING VARIABLE 'PRODUCTY' TO ACCESS THE MODEL)
	await product
		.find({})
		// RENDER PRODUCTS ONCE FOUND, 'Product' IS VARIABLE ASSIGNED TO MODEL, NEEDS TO BE PASSED THRU
		.then((data) => {
			// THIS LOOKS TO THE FOLDER THEN FILE NAME, THEN PASS MODEL VARIABLE AGAIN
			res.render('store/index', { data });
			console.log(data);
		})
		// SEND ERROR AS JSON IF ANY
		.catch((error) => {
			res.json({ error });
		});
});

//  ** SHOW ROUTE **
router.get('/:id', (req, res) => {
	// SET VARIABLE FOR ITERATOR
  const id = req.params.id;
  // QUERY DB FOR DATA AND RENDER DATA WE WANT ON SHOW LIQUID PAGE
  product.findById(id)
    .then((data) => {
			// THIS LOOKS TO THE FOLDER THEN FILE NAME, THEN PASS MODEL VARIABLE AGAIN
			res.render('show/show.liquid', { data });
			// console.log(data);
		})
		// SEND ERROR AS JSON IF ANY
		.catch((error) => {
			res.json({ error });
		});
});


module.exports = router;
