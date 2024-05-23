import express from 'express';
import products from '../data/products.js';

const router = express.Router();

router.get('/products', (req, res) => {
  res.json(products);
});

router.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

export default router;