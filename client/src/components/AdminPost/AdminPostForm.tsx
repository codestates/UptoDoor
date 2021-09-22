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
import {
  Container,
  Wrapper,
  Title,
} from "../GlobalStyle";
import AdminFileUpload from './AdminFileUpload';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { SmallButton } from '../common/Button/Button';
import AdminUploadStore from  './AdminUploadStore';
import AdminEnrollStore from './AdminEnrollStore'
import AdminUploadMenu from './AdminUploadMenu';
import { adminPost } from '../../_actions/post_action';

const { kakao }: any = window;
function AdminPostForm() {
  // 가게 이미지,상호명,가게설명,동네인증.
  // 메뉴이미지,이름,재료,가격,항목추가,파일업로드
  const dispatch = useDispatch();
  const history = useHistory();
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
  //admin address
  const changeAdminAddress = useCallback((data) => {
    const resultAddress = JSON.parse(data).address
    setAdminAddress(resultAddress);
    setAddressModal((prev)=>!prev);
  },[])
  const changeAddDetailHandler = (e:any) => {
    setadminAddressDetail(e.target.value)
  }
  const postHandler = useCallback((name) => {
    console.log(name);
    // console.log("currnet", current)
    if (switched === current) {
      console.log(adminAddressDetail)
      // dispatch(addAdminAddress(adminAddress, adminAddressDetail));
    }
    else {
      alert("동네 인증에 실패")
    }
  },[adminAddress,adminAddressDetail])
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
    console.log("슬라이드",[...menuArr.slice(0, menuArr.length-1), menu, bin])
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
    switchAddress(adminAddress)
    postHandler('main')
    if (adminAddressDetail.length === 0) return alert("상세 주소란을 입력해주세요.");
    //모든칸이 채워지지않으면 false 로 막는다. !menuItem 추후 추가잊지마.
    if(
      !storeImgArr || !title || !category || !description || 
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
      adminAddress : adminAddress,
      adminAddressDetail: adminAddressDetail,

      Menu:menuArr,
      storeImage:storeImgArr,
      storeFile : storeFile,
      xvalue:xValue,
      yvalue:yValue,
    }
      dispatch(adminPost(adminPostInfo))
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

  useEffect(() => {
    //!이페이지에 들어오면 현재 위치의 자표로 동을 찾는다.
    const geocoder = new kakao.maps.services.Geocoder();
    //현재 위치 좌표를 받아서 도로명 주소로 바꿔준다
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        const coord = new kakao.maps.LatLng(lat, lon);
          geocoder.coord2Address(coord.getLng(), coord.getLat(), callback)
      });
    }
    const callback = (result: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        setCurrent(result[0].address.address_name.split(" ")[1]);
      }
    };
  },[current]);

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
  </Container>
  )
}

export default AdminPostForm