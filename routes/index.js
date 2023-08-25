// import the express server
const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/',homeController.home);

router.get('/delete-contact',homeController.deleteContact);

router.post('/create',homeController.createContact);


module.exports = router;