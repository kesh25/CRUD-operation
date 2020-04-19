const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

// CRUD
// Create
router.post('/create', product_controller.product_create);
// Read
router.get('/', product_controller.products_all);
router.get('/:id', product_controller.product_details);
// update
router.put('/:id/update', product_controller.product_update);
// delete
router.delete('/:id/delete', product_controller.product_delete);


module.exports = router;