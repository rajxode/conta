
// import the express server
const express = require('express');

// create router
const router = express.Router();

// getting controller function
const homeController = require('../controllers/homeController');

// calling the controller function for their respective routes

// for render the homepage
router.get('/',homeController.home);
// for deleting a contact 
router.get('/delete-contact',homeController.deleteContact);
// for creating a new contact
router.post('/create',homeController.createContact);


// export the router
module.exports = router;