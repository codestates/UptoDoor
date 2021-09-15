/* eslint-disable global-require */
module.exports = {
    Login: require('./Users/Login'),
    SignOut: require('./Users/Signout'),
    SignUp: require('./Users/Signup'),
    UserInfo: require('./Users/Userinfo'),
    UserOrder: require('./Users/Userorder'),
    AdminInfo: require('./Admin/Admininfo'),
    Position: require('./Admin/Position'),
    Store: require('./Admin/Store'),
    Email: require('./Auth/Email'),
    EmailSend: require('./Auth/EmailSend'),
    Kakaologin: require('./Oauth/kakao/Login'),
    Kakaosignup: require('./Oauth/kakao/Signup'),
    Naverlogin: require('./Oauth/naver/Login'),
    Naversignup: require('./Oauth/naver/Signup'),
    Address: require('./Map/Address'),
    StoreInfo: require('./Map/Storeinfo'),
    StoreMap: require('./Map/Store')
}
