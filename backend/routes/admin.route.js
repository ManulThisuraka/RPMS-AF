const router = require("express").Router();
let controller = require('../Controllers/admin.controller');

router.post('/admins/add',controller.createAdmin);
router.get('/admins/view/',controller.getAllAdmins);
router.get('/admins/view/:staffID',controller.getAdmin);
router.delete('/admins/delete/:id',controller.deleteAdmin);

module.exports = router;