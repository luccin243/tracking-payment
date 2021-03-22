const express = require('express');
const router = express.Router();
const { isAuth, isAdmin, requireSignin } = require('../middlewares/auth');
const { getUserByID } = require('../middlewares/user');
const {
  create,
  read,
  update,
  readAll,
  remove,
  getByID,
} = require('../controllors/fonction');

router.post('/fonction/create/:userId',  create);
router.get('/fonction/:userId/:id',  read);
router.get('/fonctions/:userId', readAll);
router.put('/fonction/:userId/:id', update);
router.delete('/fonction/:userId/:id', remove);

router.param('id', getByID);
router.param('userId', getUserByID);

module.exports = router;
