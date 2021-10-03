const { user, order_delivery, store, order } = require('../../models');
module.exports = async (req, res) => {

    const sendinfo = {
        term:'',
        category:'',
        age:'',
        gender:'',
        address:''
    };

    //! 평균 구독 개월 수 
    const term = await order_delivery.findAll({ attributes: ['delivery_term'] });
    const avg = term.map((el) => { return Number(el.delivery_term) })
    const termavg = avg.reduce((a,b) => { return a+b })
    sendinfo.term = parseInt(termavg/avg.length) //평균 구독 개월

    //! 많이 찾는 카테고리별 순위
    const orderInstore = await order.findAll({raw: true, attributes : ['store_id']})

    let arr1 = []; //store_id
    let arr2 = []; //주문수량
    
    orderInstore.map((el) => {
        if(arr1.includes(el.store_id)){
            let idx = arr1.indexOf(el.store_id)
            arr2[idx] += 1;
        } else {
            arr1.push(el.store_id);
            arr2.push(1)
        }
    })

    let arr3 = []; //카테고리
    let arr4 = []; //카테고리 갯수
    const storeData = await store.findAll({ raw: true, attributes: ['id','category']})
    
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<storeData.length; j++){
            if(storeData[j].id === arr1[i]){
                if(arr3.includes(storeData[j].category)){
                    let idx = arr3.indexOf(storeData[j].category)
                    arr4[idx] += arr2[i];
                } else {
                    arr3.push(storeData[j].category);
                    arr4.push(arr2[i]);
                }
                continue;
            }
        }
    }
    sendinfo.category = [...arr3, ...arr4];
    //! 많이 찾는 사용자 < 연령대, 성별 >
    const gender = await user.findAll({ raw: true, attributes: ['age','gender']});
    const user_data = { 
        10: { man:0, woman:0 },
        20: { man:0, woman:0 },
        30: { man:0, woman:0 },
        40: { man:0, woman:0 },
        50: { man:0, woman:0 },
        60: { man:0, woman:0 },
    }
   
    const ages = Object.keys(user_data);
    const gvalue = Object.values(user_data);
    gender.map((el) => {
        let idx = ages.indexOf(el.age.slice(0,2))
        if(el.gender === '남자'){
        gvalue[idx].man += 1
        } else {
        gvalue[idx].woman += 1
        }
    })
    
    for(let i=0; i<ages.length; i++){
        user_data[ages[i]] = gvalue[i]
    }

    sendinfo.age = [ages, gvalue];
    console.log('---',sendinfo);
    res.status(200).send({ message: 'ok' , data: sendinfo})
}