const router = require("express").Router();
let controller = require('../Controllers/regUser.controller');

router.post('/users/add',controller.createUser);
router.get('/users/view/',controller.getAllUsers);
router.get('/users/view/:userID',controller.getUser);
router.delete('/users/delete/:id',controller.deleteUser);

module.exports = router;