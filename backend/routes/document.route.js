const router = require("express").Router();
let controller = require('../Controllers/document.controller');

router.post('/documents/add',controller.createDocument);
router.get('/documents/viewBySupervisor/:staffID',controller.getCategoryDocuments);
router.get('/documents/view/',controller.getAllDocuments);
router.get('/documents/view/:id',controller.getDocument);
router.put('/documents/update/:id',controller.updateDocument);
router.delete('/documents/delete/:id',controller.deleteDocument);

module.exports = router;