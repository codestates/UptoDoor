import React,{useCallback,useState,useEffect} from 'react'
import Select from 'react-select';
import {
  AdminForm,
  FlexBox,
  StoreInputBox,
  StoreNameInput,
  StoreIntroTextArea,
} from '../AdminPost/StyledAdminPost'

import {
  Container,
  Wrapper,
  Title,
} from "../GlobalStyle";
import { BtnBox, SmallButton } from '../common/Button/Button';

import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { adminPostEdit , deleteAdminPost } from '../../_actions/post_action';

import AdminUploadStoreEdit from './AdminUploadStoreEdit'
import AdminEnrollStoreEdit from './AdminEnrollStoreEdit'
import AdminFileUploadEdit from './AdminFileUploadEdit'
import AdminUploadMenuEdit from './AdminUploadMenuEdit'
import axios from 'axios';
import { END_POINTS } from '../../_actions/type';

const { kakao }: any = window;

function AdminEditForm() {

  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((state: any) => state.store);
  const user = useSelector((state:any) => state.user);
  console.log(store);

  const selectCategory: {value: string, label: string}[] = 
  [
    { value : 'food' , label : 'food'},
    { value : 'cafe' , label : 'cafe'},
    { value : 'living/home' , label : 'living/home'},
    { value : 'plants' , label : 'plants'},
    { value : 'clothes' , label : 'clothes'},
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
    // console.log('==storeimg==',storeImgs);
  }
  const updateStoreFile = (addressFile:any) => {
    setStoreFile(addressFile)
    // console.log('==addfile==',addressFile);
  }
  //!폼제출 핸들러
  const submitHandler = (e:any) => {
    console.log("제출전 menuarr",menuArr);
    e.preventDefault();
    // postHandler('main')
    if (adminAddressDetail.length === 0) return alert("상세 주소란을 입력해주세요.");
    //모든칸이 채워지지않으면 false 로 막는다. !menuItem 추후 추가잊지마.
    if(
      !storeImgArr || !title || !category || !description || !time ||
      ! adminAddress || !mobile || storeFile && !menuArr
      ){
      //모달
      return alert('all section must be filled')
    }else{
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
      // 모달띄워지고(메뉴등록이 완료되었습니다.) 메인화면
      console.log(adminPostInfo);
      //history.push('/');
    }
  }
  //!kakao add
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


  //store 삭제
  const handleClickCancle = () => {
    dispatch(deleteAdminPost())
    //모달 다셔야해요 네?
    history.push('/');
  }

  useEffect(() => {
    console.log(user.store_id);
    axios.get(`${END_POINTS}/admin/store:7`)
      .then((res) => {
        console.log(res.data);
    })
  },[])

  return (
    <Container>
      <Title>가게 수정</Title>
      <form onSubmit = {(e:any)=>submitHandler(e)}>
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
            type = 'time'
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
          primary> 수정 </SmallButton>
          <SmallButton 
          onClick = {handleClickCancle}
          type = 'button'> 삭제 </SmallButton>
        </BtnBox>
        </AdminForm>
        </FlexBox>
      </Wrapper> 
    </form>
    </Container>
  )
}

export default AdminEditForm
