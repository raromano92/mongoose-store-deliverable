const express = require('express')
const router = express.Router()
const product = require('../models/product');

// SEED ROUTE
router.get('/', async (req, res) => {
    console.log("hitting route")

    const newProducts =
      [
        {
          name: 'Beans',
          description: 'A small pile of beans. Buy more beans for a big pile of beans.',
          img: 'https://imgur.com/LEHS8h3.png',
          price: 5,
          qty: 99
        }, {
          name: 'Bones',
          description: 'It\'s just a bag of bones.',
          img: 'https://imgur.com/dalOqwk.png',
          price: 25,
          qty: 5
        }, {
          name: 'Bins',
          description: 'A stack of colorful bins for your beans and bones.',
          img: 'https://imgur.com/ptWDPO1.png',
          price: 7000,
          qty: 1
        }
      ]
  
    try {
      const seedItems = await product.create(newProducts)
        res.send(seedItems)
        console.log('data', seedItems)
    }
    catch (err) {
      res.send(err.message)
    }
})

module.exports = router