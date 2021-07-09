const express = require('express');
const router = express.Router();


const mongoController = require('../controllers/mongoController')

router.get('/insertUser', mongoController.insertUser);
router.get('/deleteUser', mongoController.deleteUser);
router.get('/updateUser', mongoController.updateUser);
router.get('/getAllUsers', mongoController.getAllUsers);

module.exports = router;


