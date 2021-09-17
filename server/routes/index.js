const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');
const auth = require('../middlewares/auth');

router.post('/users/signup', controllers.SignUp);
router.post('/users/signin', auth, controllers.Login);
router.delete('/users/signout/:id',auth, controllers.SignOut);
router.get('/users/userinfo/:id', auth, controllers.UserInfo);
router.patch('/users/userinfo/:id', auth, controllers.UpdateUser);
router.get('/users/orderinfo/:id', auth, controllers.UserOrder);
router.post('/users/order', auth, controllers.Order);
router.delete('/users/order/:id', auth, controllers.DeleteOrder);
router.post('/users/address', auth, controllers.Address);
router.patch('/position', auth, controllers.Position);
router.post('/admin/store', auth, controllers.Store);
router.get('/admin/store/:id', auth, controllers.StoreData);
router.patch('/admin/store/:id', auth, controllers.UpdateStore);
router.get('/admin/admininfo', auth, controllers.AdminInfo);
router.get('/store', auth, controllers.StoreMap);
router.get('/storeinfo', auth, controllers.StoreInfo);
router.get('/auth/email', controllers.Email);
router.post('/auth/email', controllers.EmailSend);
router.post('/oauth/kakao/signup', auth, controllers.Kakaosignup);
router.post('/oauth/kakao/login', auth, controllers.Kakaologin);
router.post('/oauth/naver/signup', auth, controllers.Naversignup);
router.post('/oatuh/naver/login', auth, controllers.Naverlogin);

module.exports = router;
