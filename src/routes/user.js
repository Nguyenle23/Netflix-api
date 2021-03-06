const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

const verify = require('../middlewares/verify');

router.put('/:id', verify, userController.updateUser);
router.delete('/:id', verify, userController.deleteUser);
router.get('/find/:id', userController.findUser);
router.get('/', verify, userController.findAllUser);
router.get('/stats', userController.findUserStats);


module.exports = router;