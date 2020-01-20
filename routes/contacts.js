const express = require('express');
const router = express.Router();

// @route     GET  api/contacts
// @desc      Get all contacts
// @access    Private

router.get('/', (req, res) => {
  res.send('Get all contacts in user');
});

// @route     POST  api/contacts
// @desc      Add new conatats
// @access    Private

router.post('/', (req, res) => {
  res.send('Add new contacts');
});

// @route     PUT  api/contacts
// @desc      Update conatats
// @access    Private

router.put('/:id', (req, res) => {
  res.send('Update contacts');
});

// @route     api/contacts
// @desc      Delete conatats
// @access    Private

router.delete('/:id', (req, res) => {
  res.send('Delete contacts');
});

module.exports = router;
