import React, {useState,useCallback,useEffect} from 'react' 
import Select from 'react-select';
import {
  AdminForm,
  FlexBox,
  StoreInputBox,
  StoreNameInput,
  StoreIntroTextArea,
  StoreBtnBox,
} from './StyledAdminPost'
import {Container,Wrapper,Title,} from "../GlobalStyle";
import { SmallButton } from '../common/Button/Button';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { adminPost } from '../../_actions/post_action';

import AdminUploadStore from  './AdminUploadStore';
import AdminEnrollStore from './AdminEnrollStore'
import AdminUploadMenu from './AdminUploadMenu';
import AdminFileUpload from './AdminFileUpload';
import ConfirmModal from '../common/Modal/ConfirmModal';

const { kakao }: any = window;
function AdminPostForm() {
  // 가게 이미지,상호명,가게설명,동네인증.
  // 메뉴이미지,이름,재료,가격,항목추가,파일업로드
  const dispatch:any = useDispatch();
  const history = useHistory();
  
  const selectCategory: {value: string, label: string}[] = 
  [
    { value : 'food' , label : 'food'},
    { value : 'cafe' , label : 'cafe'},
    { value : 'living/home' , label : 'living/home'},
    { value: 'beauty', label: 'beauty' },
    { value: 'etc', label: 'etc' },
  ]
  //* 모달관련
  const [openModal, setOpenModal] = useState(false);
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
  const [current, setCurrent] = useState("")
  const [switched, setSwitched ] = useState("");
  const [adminAddress , setAdminAddress] = useState('');
  const [adminAddressDetail, setadminAddressDetail] = useState("");
  const [addressModal, setAddressModal] = useState(false);
  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');
  //menu
  const [menuArr, setMenuArr]:any = useState([{
    menuImg: 'data:image/png;base64,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', 
    menuName:'', menuDescription:'', price:0
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
  const changeAdminAddress = useCallback( async (data) => {
    await switchAddress(data.address);
    await setAdminAddress(data.address);
    await setAddressModal((prev)=>!prev);
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
    const bin = {menuImg: 
      'data:image/png;base64,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'
      , menuName:'', price:0, menuDescription:''}
    setMenuArr([...menuArr, bin]);
  };
  //!remove menu onclick handler
  const removeMenuHandler = (e:any) => {

    console.log('menuArr:',menuArr)
    console.log('e:',e.target.id);
    // console.log('idx:',idx);
    if(menuArr.length > 1){
      const filtering = menuArr.filter((el:any) => el !== menuArr[e.target.id])
      console.log('filtering',filtering);
      setMenuArr(filtering);
    }else{
     alert("최소한 1개의 메뉴는 있어야 합니다.")
    }
  }

  //!upload storeimg
  const updateStoreImg = (storeImgs:any) => {
    setStoreImgArr(storeImgs)
  }
  const updateStoreFile = (addressFile:any) => {
    setStoreFile(addressFile)
  }
  //!폼제출 핸들러
  const submitHandler = (e:any) => {
    console.log("메뉴에레이",menuArr)
    e.preventDefault();
    if (adminAddressDetail.length === 0) return alert("상세 주소란을 입력해주세요.");
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
      mobile : mobile,
      delivery_time : time,
      adminAddress : adminAddress,
      adminAddressDetail: adminAddressDetail,

      menu:menuArr,
      storeImage:storeImgArr,
      storeFile : storeFile,
      xvalue:xValue,
      yvalue:yValue,
    }
      dispatch(adminPost(adminPostInfo))
      .then((res:any) => {
        if (res.payload.message === 'Store registration is complete') {
          setOpenModal(true);
        }
      })
      // 모달띄워지고(메뉴등록이 완료되었습니다.) 메인화면
      // console.log(adminPostInfo);
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

  const handleClickCancle = () => {
    history.push('/');
  }
  
return (
  <Container>
    <Title>가게 등록</Title>
    <form onSubmit = {(e:any)=>submitHandler(e)}>
      <Wrapper>
      <FlexBox>
        <AdminForm>
        {/* 업로드 컴포넌트 */}
        <AdminUploadStore 
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
          {/* 주소등록 컴포넌트 */}
          <AdminEnrollStore
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

          {/* 가게 사업자등록증 파일업로드 */}
            <AdminFileUpload
            setMenuArr={setMenuArr}
            setStoreFile={setStoreFile}
            updateStoreFile = {updateStoreFile}
          />

        <AdminUploadMenu
          addMenuHandler={(menus: any)=>addMenuHandler(menus)}
          removeMenuHandler = {removeMenuHandler}
          menuArr = {menuArr}
          setMenuArr = {setMenuArr}
        />
        <StoreBtnBox>
          <SmallButton> 등록 </SmallButton>
          <SmallButton 
          onClick = {handleClickCancle}
          type = 'button'> 취소 </SmallButton>
        </StoreBtnBox>
        </AdminForm>
        </FlexBox>
      </Wrapper>
    </form>

    {openModal ? 
    <ConfirmModal
      openModal={openModal}
      setOpenModal={setOpenModal}
      modalTitleText="가게 등록 완료"
      modalText="가게 신청이 완료되었습니다. 승인까지 1-2일 걸립니다."
      modalBtn="확인"
      url='/mypage'
    />
    : 
    null}
  </Container>
  )
}

export default AdminPostForm