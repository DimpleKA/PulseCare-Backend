const express = require('express');
const router = express.Router();

// Define patient routes
router.get('/', (req, res) => {
  res.send('List of patients');
});

router.post('/', (req, res) => {
  res.send('Add a new patient');
});

router.get('/:id', (req, res) => {
  res.send(`Patient details for ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update patient with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete patient with ID ${req.params.id}`);
});

module.exports = router;
