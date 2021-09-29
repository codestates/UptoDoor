import React,{useCallback,useState,useEffect} from 'react'
import Select from 'react-select';
import {
  AdminForm,
  FlexBox,
  StoreInputBox,
  StoreNameInput,
  StoreIntroTextArea,
} from '../AdminPost/StyledAdminPost'
import {Container,Wrapper,Title} from "../GlobalStyle";
import { BtnBox, SmallButton } from '../common/Button/Button';

import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { adminPostGet, adminPostEdit , deleteAdminPost } from '../../_actions/post_action';

import AdminUploadStoreEdit from './AdminUploadStoreEdit'
import AdminEnrollStoreEdit from './AdminEnrollStoreEdit'
import AdminFileUploadEdit from './AdminFileUploadEdit'
import AdminUploadMenuEdit from './AdminUploadMenuEdit'
import WarningModal from '../common/Modal/WarningModal'
import ConfirmModal from '../common/Modal/ConfirmModal';

import axios from 'axios';
import { END_POINTS } from '../../_actions/type';
import { Category } from '../UserOrderInfo/StyledUserOrderInfo';

const { kakao }: any = window;

function AdminEditForm() {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state:any) => state.user);
  const admin = useSelector((state:any) => state.admin);

  const [openModal , setOpenModal] = useState(false);
  const [confirmModal , setConfirmModal] = useState(false);

  //upload store img,file
  const [storeImgArr , setStoreImgArr]:any = useState([]);
  const [storeFile , setStoreFile]:any = useState(null);
  //store
  const [title , setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description , setDescription] = useState('');
  const [time , setTime] = useState('');
  const [mobile , setMobile] = useState('');
  const [storeinfo, setStoreinfo]:any = useState({});
  const [imageArr, setImageArr]:any = useState([]);

  const selectCategory: {value: string, label: string}[] = 
  [ 
    { value : 'food' , label : 'food'},
    { value : 'cafe' , label : 'cafe'},
    { value : 'living/home' , label : 'living/home'},
    { value : 'beauty' , label : 'beauty'},
    { value : 'hobby' , label : 'hobby'},
  ]
   //주소 
  const [switched, setSwitched ] = useState("");
  const [adminAddress , setAdminAddress] = useState('');
  const [adminAddressDetail, setadminAddressDetail] = useState("");
  const [addressModal, setAddressModal] = useState(false);
  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');
  //menu
  const [menuArr, setMenuArr]:any = useState([]);

  const changeTitleHandler = (e:any) => {
    setTitle(e.target.value)
  }
  const changeCategoryHandler = (e:any) => {
    setCategory(e.value)
    // setCategory(e.target.value)
  }
  const changeDescHandler = (e:any) => {
    const limitWord = e.target.value;
    //설명제한
    if(limitWord.length > 150){
      alert('글자는 150자까지유효성검사 ?')
    }else{
      setDescription(limitWord);
    }
  }
  const changeTimeHandler = (e:any) => {
    setTime(e.target.value)
  }
  //admin address
  const changeAdminAddress = useCallback((data) => {
    const resultAddress = JSON.parse(data).address
    switchAddress(resultAddress)
    setAdminAddress(resultAddress);
    setAddressModal((prev)=>!prev);
  },[])
  const changeAddDetailHandler = (e:any) => {
    setadminAddressDetail(e.target.value)
  }
  const changeMobileHandler = useCallback((e) => {
    const mobileRegExp = /^[0-9\b -]{0,13}$/;
    if(mobileRegExp.test(e.target.value)){
      setMobile(e.target.value);
    }
  },[])
  useEffect(() => {
    if (mobile.length === 10) {
      setMobile(mobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (mobile.length === 13) {
      setMobile(mobile.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [mobile]);

  
  //!add menu onchange handler
  const addMenuHandler = (menu: any) => {
    const bin = {id:0, image: 
      'data:image/png;base64,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'
      , name:'', price:0, detail:''}
    setMenuArr([...menuArr, bin]);
  };

  //!upload storeimg
  const updateStoreImg = (storeImgs:any) => {
    setImageArr([...imageArr,storeImgs])
  }
  const updateStoreFile = (addressFile:any) => {
    setStoreFile(addressFile)
  }
  //!폼제출 핸들러
  const submitHandler = (e:any) => {
    console.log(e);
    e.preventDefault();   
    // if(!storeImgArr || !title || !category || !description || !time ||
      // ! adminAddress || !mobile || storeFile || !menuArr){
    //   //모달
    //   return alert('all section must be filled')
    // }else{
     
      // setConfirmModal(true);
     
      const sendInfo = {
        image : imageArr,
        description : description,
        time : time,
        mobile : mobile,
        menuArr : menuArr
      }
      //history.push('/');
      axios.patch(`http://localhost:3060/admin/store/${storeinfo.id}`,{sendInfo})
      .then((res)=>{
        console.log("res",res.data)
      })
  }

  //kakao add
  const switchAddress = useCallback((address) => {
    const geocoder = new kakao.maps.services.Geocoder();
    //! 주소를 좌표로
    geocoder.addressSearch(address, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        setYValue(result[0].x);
        setXValue(result[0].y);
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback)
      }
    });
    const callback = (result:any, status:any) => {
    if (status === kakao.maps.services.Status.OK) {
      setSwitched(result[0].address.address_name.split(" ")[1]);
    }
  };
  }, []);

  //! store 삭제
  const deleteStoreHandler = () => {
    alert('가게삭제 성공')
    // dispatch(deleteAdminPost())    
    // .then((res: any) => {
    //   if (res.payload.message  === 'good bye') {
    //     alert('탈퇴성공')
    //     window.location.href="http://localhost:3000/"
    //   } else {
    //     alert('탈퇴 실패. 못벗어남.');
    //   }
    // })
    // .catch((err: any) => {
    //   console.log(err)
    // });
  }

  const deleteModalHandler = () => {
    setOpenModal(true)
  }

  useEffect(() => {
    const store_id = admin.orderdata.store.id
    axios.get(`${END_POINTS}/admin/store/${store_id}`)
      .then((res) => {
        console.log("1",res.data);
        const store_info = res.data.storeData
        console.log("2",store_info);
        setStoreinfo(store_info)
        setImageArr(store_info.image)
        setTitle(store_info.name)
        setCategory(store_info.category)
        setDescription(store_info.introduce) 
        setTime(store_info.delivery_time)
        setAdminAddress(store_info.address)
        setMobile(store_info.number)
        setStoreFile(store_info.Business_paper)
        setMenuArr(store_info.menus)
    })
  },[])

  return (
    <Container>
      <Title>가게 수정</Title>
      <form onSubmit = {submitHandler}>
      <Wrapper>
      <FlexBox>
        <AdminForm>

        <AdminUploadStoreEdit 
        updateStoreImg = {updateStoreImg}
        imageArr = {imageArr}
        setImageArr = {setImageArr}   
        />
        
          <StoreInputBox>
            <label>상호명</label>
            <StoreNameInput 
            readOnly
            type = 'text'
            defaultValue = {title} 
            />
          </StoreInputBox>

          <StoreInputBox>
            <label>카테고리</label>
            <StoreNameInput 
            readOnly
            type = 'text'
            defaultValue = {category} 
            />
          </StoreInputBox>

          <StoreInputBox>
            <label>가게 설명</label>
            <StoreIntroTextArea 
            defaultValue = {description} 
            placeholder = '150자 이내로 작성해주세요.' 
            onChange = {changeDescHandler}/>
          </StoreInputBox>

          <StoreInputBox>
            <label>배달 가능시간</label>
            <StoreNameInput 
            type = 'type'
            defaultValue = {time} 
            placeholder = '배달 가능한 시간을 작성하세요' 
            onChange = {changeTimeHandler}/>
          </StoreInputBox>
          
        </AdminForm>

        <AdminForm>
          <AdminEnrollStoreEdit
            addressModal = {addressModal}
            setAddressModal = {setAddressModal}
            adminAddress = {adminAddress}
            changeAdminAddress = {changeAdminAddress}
            changeAddDetailHandler = {changeAddDetailHandler}
          />

          <StoreInputBox>
            <label>모바일</label>
            <StoreNameInput 
            required
            type = 'text' 
            placeholder = '모바일'
            value = {mobile} 
            onChange = {changeMobileHandler}/>
          </StoreInputBox>

          {/* <AdminFileUploadEdit
          storeFile={storeFile}
          setMenuArr={setMenuArr}
          setStoreFile={setStoreFile}
          updateStoreFile = {updateStoreFile}
          /> */}

        <AdminUploadMenuEdit
          addMenuHandler={(menus: any)=>addMenuHandler(menus)}
          menuArr = {menuArr}
          setMenuArr = {setMenuArr}
        />
        <BtnBox flexable>
          <SmallButton
          type = 'submit'
          primary
          onClick={submitHandler}
          > 수정 </SmallButton>

          <SmallButton  
          type = 'button'
          onClick = {deleteModalHandler}
          > 삭제 </SmallButton>
        </BtnBox>
        </AdminForm>
        </FlexBox>
      </Wrapper> 
    </form>

    {openModal ?
      <WarningModal
      openModal = {openModal}
      url='/'
      setOpenModal={setOpenModal}
      modalTitleText = '정말 가게를 삭제하시겠습니까?'
      modalText = '가게를 삭제하시면 일주일간 재등록이 불가합니다.'
      yes = '가게 삭제'
      no='취소'
      handler={deleteStoreHandler}
      />
      :
      null
      }
    {confirmModal ?
      <ConfirmModal
      confirmModal = {confirmModal}
      url="/"
      setOpenModal={setOpenModal}
      modalTitleText = '수정이 완료되었습니다.'
      modalText = '확인 후 메인페이지로 이동합니다.'
      modalBtn = '확인'
      />
      :
      null
      }
    </Container>
  )
}

export default AdminEditForm
