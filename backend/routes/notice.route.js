const router = require("express").Router();
let controller = require('../Controllers/notice.controller');

router.post('/notices/add',controller.createNotice);
router.get('/notices/viewByRole/:roleID',controller.getCategoryNotices);
router.get('/notices/view/',controller.getAllNotices);
router.get('/notices/view/:id',controller.getNotice);
router.put('/notices/update/:id',controller.updateNotice);
router.delete('/notices/delete/:id',controller.deleteNotice);

module.exports = router;