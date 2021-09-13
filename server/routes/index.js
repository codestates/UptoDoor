const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');
const auth = require('../middlewares/auth');

router.post('/users/signup', auth, controllers.SignUp);
router.post('/users/signin', auth, controllers.Login);
router.delete('/users/signout', auth, controllers.SignOut);
router.use('/users/userinfo', auth, controllers.UserInfo);
router.use('/users/orderinfo', auth, controllers.UserOrder);
router.post('/users/address', auth,controllers.Address);
router.patch('/position', auth, controllers.Position);
router.use('/admin/store', auth, controllers.Store);
router.get('/admin/admininfo', auth, controllers.AdminInfo);
router.get('/store', auth, controllers.StoreMap);
router.get('/storeinfo', auth, controllers.StoreInfo);
router.get('/auth/email', auth, controllers.Email);
router.post('/oauth/kakao/signup', controllers.Kakaosignup);
router.post('/oauth/kakao/login', controllers.Kakaologin);
router.post('/oauth/naver/signup', controllers.Naversignup);
router.post('/oatuh/naver/login', controllers.Naverlogin);

module.exports = router;