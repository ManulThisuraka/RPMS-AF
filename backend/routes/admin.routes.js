const router = require("express").Router();

let doccontroller = require('../Controllers/document.controller');
let noticontroller = require('../Controllers/notice.controller');
let regcontroller = require('../Controllers/regUser.controller');
let prescontroller = require('../Controllers/presentation.controller');

//Document Routes 
router.post('/documents/add',doccontroller.createDocument);
router.get('/documents/viewBySupervisor/:staffID',doccontroller.getCategoryDocuments);
router.get('/documents/viewByGroup/:groupID',doccontroller.getCategoryDocumentsGroup);
router.get('/documents/view',doccontroller.getAllDocuments);

//presentations Routes 
router.post('/presentations/add',prescontroller.createPresentation);
router.get('/presentations/viewByPanel/:panelID',prescontroller.getCategoryPresentations);
router.get('/presentations/viewByGroup/:groupID',prescontroller.getCategoryPresentationsGroup);
router.get('/presentations/view',prescontroller.getAllPresentations);


//notice Routes
router.post('/notices/add',noticontroller.createNotice);
router.get('/notices/viewByRole/:roleID',noticontroller.getCategoryNotices);
router.get('/notices/view/',noticontroller.getAllNotices);
router.get('/notices/view/:id',noticontroller.getNotice);
router.delete('/notices/delete/:id',noticontroller.deleteNotice);

//reguser Routes
router.post('/users/add',regcontroller.createUser);
router.get('/users/view/',regcontroller.getAllUsers);
router.get('/users/view/:userID',regcontroller.getUser);
router.delete('/users/delete/:id',regcontroller.deleteUser);

module.exports = router;