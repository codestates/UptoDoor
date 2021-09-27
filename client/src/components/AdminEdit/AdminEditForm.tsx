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
import { adminPostEdit , deleteAdminPost } from '../../_actions/post_action';

import AdminUploadStoreEdit from './AdminUploadStoreEdit'
import AdminEnrollStoreEdit from './AdminEnrollStoreEdit'
import AdminFileUploadEdit from './AdminFileUploadEdit'
import AdminUploadMenuEdit from './AdminUploadMenuEdit'
import WarningModal from '../common/Modal/WarningModal'
import ConfirmModal from '../common/Modal/ConfirmModal';

import axios from 'axios';
import { END_POINTS } from '../../_actions/type';

const { kakao }: any = window;

function AdminEditForm() {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state:any) => state.user);

  const [openModal , setOpenModal] = useState(false);
  const [confirmModal , setConfirmModal] = useState(false);

  const selectCategory: {value: string, label: string}[] = 
  [
    { value : 'food' , label : 'food'},
    { value : 'cafe' , label : 'cafe'},
    { value : 'living/home' , label : 'living/home'},
    { value : 'beauty' , label : 'beauty'},
    { value : 'hobby' , label : 'hobby'},
  ]
  //upload store img,file
  const [storeImgArr , setStoreImgArr]:any = useState([]);
  const [storeFile , setStoreFile]:any = useState('');
  //store
  const [title , setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description , setDescription] = useState('');
  const [time , setTime] = useState('');
  const [mobile , setMobile] = useState('');
   //주소 
  const [switched, setSwitched ] = useState("");
  const [adminAddress , setAdminAddress] = useState('');
  const [adminAddressDetail, setadminAddressDetail] = useState("");
  const [addressModal, setAddressModal] = useState(false);
  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');
  //menu
  const [menuArr, setMenuArr]:any = useState([{
    menuImg: '', menuName:'', menuDescription:'', price:0
  }]);

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
    const bin = {menuImg: '', menuName:'', price:0, menuDescription:''}
    // console.log("슬라이드",[...menuArr.slice(0, menuArr.length-1), menu, bin])
    setMenuArr([...menuArr.slice(0, menuArr.length-1), menu, bin]);
  };
  //!upload storeimg
  const updateStoreImg = (storeImgs:any) => {
    setStoreImgArr(storeImgs)
  }
  const updateStoreFile = (addressFile:any) => {
    setStoreFile(addressFile)
  }
  //!폼제출 핸들러
  const submitHandler = useCallback((e:any) => {
    console.log(e);
    e.preventDefault();   
    if(!storeImgArr || !title || !category || !description || !time ||
      ! adminAddress || !mobile || storeFile || !menuArr){
      //모달
      return alert('all section must be filled')
    }else{
      setConfirmModal(true);
      const adminPostInfo = {
      title:title,
      category:category,
      description:description,
      delivery_time : time,
      mobile : mobile,
      adminAddress : adminAddress,
      adminAddressDetail: adminAddressDetail,

      menu:menuArr,
      storeImage:storeImgArr,
      storeFile : storeFile,
      xvalue:xValue,
      yvalue:yValue,
    }
      dispatch(adminPostEdit(adminPostInfo))
      console.log(adminPostInfo);
      //history.push('/');
    }
  },[storeImgArr,title,category,
    description,time,adminAddress,mobile,storeFile,menuArr])

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
    console.log("스토어아이디",user.store_id);
    axios.get(`${END_POINTS}/admin/store/64`)
      .then((res) => {
        console.log(res.data);
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
        updateStoreImg = {updateStoreImg}/>
        
          <StoreInputBox>
            <label>상호명</label>
            <StoreNameInput 
            required
            type = 'text'
            defaultValue = {title} 
            placeholder = '가게 이름을 적어주세요' 
            onChange = {changeTitleHandler}/>
          </StoreInputBox>

          <StoreInputBox>
            <label>카테고리</label>
              <Select
              required
              className = 'category-selection'
              options = {selectCategory}
              onChange = {(e)=>changeCategoryHandler(e)}
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
            required
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

          <AdminFileUploadEdit
          setMenuArr={setMenuArr}
          setStoreFile={setStoreFile}
          updateStoreFile = {updateStoreFile}
          />

        <AdminUploadMenuEdit
          addMenuHandler={(menus: any)=>addMenuHandler(menus)}
          menuArr = {menuArr}
          setMenuArr = {setMenuArr}
        />
        <BtnBox flexable>
          <SmallButton
          type = 'submit'
          primary> 수정 </SmallButton>

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
