const axios = require('axios');
axios.defaults.withCredentials = true

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    let Access_token;
    let userData;
    console.log("body",req.body.authorizationCode);
    axios.post("https://kauth.kakao.com/oauth/token",
    // {grant_type:"authorization_code",
    // client_id:"a89491b2f53a7e437ff1a3f92347a22f",
    // redirect_uri:"http://localhost:3000/kakao", 
    // code:req.body.authorizationCode,
    // }
    `grant_type=authorization_code&client_id=a89491b2f53a7e437ff1a3f92347a22f&redirect_uri=http://localhost:3000/kakao&code=${req.body.authorizationCode}`
    ,{
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" }
    }).then((result)=>{
        Access_token = result.data.access_token
        console.log("토큰값",Access_token)
        axios.post("https://kapi.kakao.com/v2/user/me",null,{
            headers: {
                "Authorization" : `Bearer ${Access_token}`,
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" 
                }
        }).then((result)=>{
            console.log("토큰 유저정보",result.data);
            userData = result.data;
        }).then(()=>
            res.status(200).send({message : "sucess", data : userData})
        )
    })
   
    
    
}