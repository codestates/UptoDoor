const { user, order_delivery, store, user_order, order } = require('../../models');
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
    sendinfo.term = (termavg/avg.length).toFixed(1)//평균 구독 개월 소숫점 첫째자리

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

    //! 연령대, 성별로 카테고리 주문량
    const total_user_data = [
        { food : [ {'10대': 0}, {'20대': 0}, {'30대': 0}, {'40대': 0}, {'50대': 0}, {'60대': 0} ],
        cafe : [ {'10대': 0}, {'20대': 0}, {'30대': 0}, {'40대': 0}, {'50대': 0}, {'60대': 0} ],
        'living/home' : [ {'10대': 0}, {'20대': 0}, {'30대': 0}, {'40대': 0}, {'50대': 0}, {'60대': 0} ],
        beauty : [ {'10대': 0}, {'20대': 0}, {'30대': 0}, {'40대': 0}, {'50대': 0}, {'60대': 0} ],
        etc : [ {'10대': 0}, {'20대': 0}, {'30대': 0}, {'40대': 0}, {'50대': 0}, {'60대': 0} ], 
        },
        { food : [ {'10대': 0}, {'20대': 0}, {'30대': 0}, {'40대': 0}, {'50대': 0}, {'60대': 0} ],
        cafe : [ {'10대': 0}, {'20대': 0}, {'30대': 0}, {'40대': 0}, {'50대': 0}, {'60대': 0} ],
        'living/home' : [ {'10대': 0}, {'20대': 0}, {'30대': 0}, {'40대': 0}, {'50대': 0}, {'60대': 0} ],
        beauty : [ {'10대': 0}, {'20대': 0}, {'30대': 0}, {'40대': 0}, {'50대': 0}, {'60대': 0} ],
        etc : [ {'10대': 0}, {'20대': 0}, {'30대': 0}, {'40대': 0}, {'50대': 0}, {'60대': 0} ], 
        }
    ]
    
    const mandata = await user.findAll({ where: { gender: '남자'}, 
    attributes: ['age'], include: [{ model: user_order, attributes: ['user_id','order_id'],
    include: [{ model: order, attributes: ['store_id'], include: [{ model: store , attributes: ['category']}]}]}],
    })

    for(let el of mandata){
        if(el.user_orders.length > 0){
            for(let x of el.user_orders){
                total_user_data[0][x.order.store.category].map((y) => {
                    if(y[el.age] !== undefined){
                        y[el.age] += 1
                    }
                })
            }
        }
    }

    const womandata = await user.findAll({ where: { gender: '여자'}, 
    attributes: ['age'], include: [{ model: user_order, attributes: ['user_id','order_id'],
    include: [{ model: order, attributes: ['store_id'], include: [{ model: store , attributes: ['category']}]}]}],
    })

    for(let el of womandata){
        if(el.user_orders.length > 0){
            for(let x of el.user_orders){
                total_user_data[1][x.order.store.category].map((y) => {
                    if(y[el.age] !== undefined){
                        y[el.age] += 1
                    }
                })
            }
        }
    }

    sendinfo.gender = total_user_data;

    //! 많이 이용하는 지역

    const addr = await order.findAll({raw:true, attributes:['selected_address']});
    let arr5 = []; //주소
    let arr6 = []; //주소 갯수
    let arr7 = [];
    let arr8 = [];

    addr.map((el) => { el.selected_address = el.selected_address.split(' ')[1] })

    addr.map((el) => {
    if(arr5.includes(el.selected_address)){
        let idx = arr5.indexOf(el.selected_address)
            arr6[idx] += 1;
        } else {
            arr5.push(el.selected_address);
            arr6.push(1)
        }
    })

    //! top 10
    for(let i=0; i<2; i++){
        let idx;
        let max = arr6.reduce((a, b) => {
            return Math.max(a, b);
        })
        idx = arr6.indexOf(max);
        arr7.push(arr5[idx]);
        arr8.push(arr6[idx]);
        arr5.splice(idx, 1);
        arr6.splice(idx, 1);
    }

    sendinfo.address =  [arr7, arr8]

    //console.log('---',addr);
    res.status(200).send({ message: 'ok' , data: sendinfo})
}