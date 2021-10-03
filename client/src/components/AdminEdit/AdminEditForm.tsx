import React,{useCallback,useState,useEffect} from 'react'
import Select from 'react-select';
import TimePicker from "rc-time-picker";
import moment from "moment";
import './style.css'
import {
  AdminForm,
  FlexBox,
  StoreInputBox,
  StoreInput,
  StoreIntroTextArea,OpenCloseInputWrapper,
  StoreBtnBox,
} from '../AdminPost/StyledAdminPost'
import {Container,Wrapper,Title} from "../GlobalStyle";
import { BtnBox, SmallButton } from '../common/Button/Button';

import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import {  adminStoreEdit , adminStoreDelete } from '../../_actions/admin_action';

import AdminUploadStoreEdit from './AdminUploadStoreEdit'
import AdminEnrollStoreEdit from './AdminEnrollStoreEdit'
import AdminUploadMenuEdit from './AdminUploadMenuEdit'
import WarningModal from '../common/Modal/WarningModal'
import ConfirmModal from '../common/Modal/ConfirmModal';

import axios from 'axios';
import { END_POINTS } from '../../_actions/type';

const { kakao }: any = window;

function AdminEditForm() {

  const dispatch:any = useDispatch();
  const history = useHistory();
  const user = useSelector((state:any) => state.user);
  const admin = useSelector((state:any) => state.admin);
  //모달 수정, 삭제
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteOkModal, setDeleteOkModal] = useState(false);
  const [modalSuccess , setModalSuccess] = useState(false);

  //upload store img,file
  const [storeImgArr , setStoreImgArr]:any = useState([]);
  const [storeFile , setStoreFile]:any = useState(null);
  //store
  const [title , setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description , setDescription] = useState('');
  
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
  const [adminAddressDetail, setadminAddressDetail] = useState('');
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
  //admin address
  const changeAdminAddress = useCallback((data) => {
    switchAddress(data.address)
    setAdminAddress(data.address);
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
    const bin = {id:0, image: './images/icon/menu-add.png', name:'', price:0, detail:''}
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
        open_time: openTime,
        close_time:closeTime,
        adminAddressDetail : adminAddressDetail,
        mobile : mobile,
        menuArr : menuArr
      }
      console.log("보내기전 데이터",sendInfo)
      //history.push('/');
      dispatch(adminStoreEdit(sendInfo, storeinfo.id))
      .then((res:any)=>{
        if (res.payload.message === 'update success') {
          setModalSuccess(true);
          setEditModal(true)
        }
      }).catch((err:void) => {
          setModalSuccess(false);
          setEditModal(true)
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
    console.log('함수실행')
    alert('가게삭제 성공')
    dispatch(adminStoreDelete(admin.id))   
    .then((res: any) => {
      if (res.payload.message  === 'good bye') {
        setDeleteModal(false);
        setModalSuccess(true);
        setDeleteOkModal(true);
        
      } else {
        setDeleteModal(false);
        setModalSuccess(false);
        setDeleteOkModal(true);
      }
    })
    .catch((err: any) => {
        setDeleteModal(false);
        setModalSuccess(false);
        setDeleteOkModal(true);
    });
  }

  const deleteModalHandler = () => {
    setDeleteModal(true)
  }
  
  useEffect(() => {
    const store_id = admin.id
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
        setOpenTime(store_info.open_time)
        setCloseTime(store_info.close_time)
        setAdminAddress(store_info.address)
        setadminAddressDetail(store_info.address_detail)
        setMobile(store_info.number)
        setStoreFile(store_info.Business_paper)
        setMenuArr(store_info.menus)
    })
  },[])
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('')
  const monent = moment();
  const [changeOpenMoment, setChangeOpenMoment] = useState(monent);
  const [changeCloseMoment, setChangeCloseMoment] = useState(monent);
  const str =  "HH:mm";
  const onChangeOpenTime = (value: any) => {
    console.log(value && value.format(str));
    setChangeOpenMoment(value);
    setOpenTime(value && value.format(str));
  }
  const onChangeCloseTime = (value: any) => {
    console.log(value);
    console.log(value && value.format(str));
    setChangeCloseMoment(value);
    setCloseTime(value && value.format(str));
  }

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
            <StoreInput 
            readOnly
            type = 'text'
            defaultValue = {title} 
            />
          </StoreInputBox>

          <StoreInputBox>
            <label>카테고리</label>
            <StoreInput 
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
              <label>배달 가능시간<span>(ex.09:00-17:00)</span></label>
              
              <OpenCloseInputWrapper>
            <TimePicker
                  value={changeOpenMoment}
                  showSecond={false}
                  minuteStep={15}
                  format="HH:mm"
                  use12Hours
                  inputReadOnly
                  onChange={onChangeOpenTime}
                  ></TimePicker>
                  {" "}
                  <h1>-</h1>
                  {" "}
                <TimePicker
                  value={changeCloseMoment}
                  showSecond={false}
                  minuteStep={15}
                  format="HH:mm"
                  use12Hours
                  inputReadOnly
                  onChange={onChangeCloseTime}
                ></TimePicker>
              </OpenCloseInputWrapper>
            
            </StoreInputBox>
          
        </AdminForm>

        <AdminForm>
          <AdminEnrollStoreEdit
            addressModal = {addressModal}
            setAddressModal = {setAddressModal}
            adminAddress = {adminAddress}
            adminAddressDetail = {adminAddressDetail}
            changeAdminAddress = {changeAdminAddress}
            changeAddDetailHandler = {changeAddDetailHandler}
          />

          <StoreInputBox>
            <label>모바일</label>
            <StoreInput 
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
        <StoreBtnBox flexable>
          <SmallButton
          type = 'submit'
          primary
          onClick={submitHandler}
          > 수정 </SmallButton>

          <SmallButton  
          type = 'button'
          onClick = {deleteModalHandler}
          > 삭제 </SmallButton>
        </StoreBtnBox>
        </AdminForm>
        </FlexBox>
      </Wrapper> 
    </form>

    {deleteModal ?
      <WarningModal
      openModal = {deleteModal}
      url='/'
      setOpenModal={setDeleteModal}
      modalTitleText = '정말 가게를 삭제하시겠습니까?'
      modalText = '가게를 삭제하시면 일주일간 재등록이 불가합니다.'
      yes = '가게 삭제'
      no='취소'
      handler={deleteStoreHandler}
      />
      :
      null
      }
      {deleteOkModal ?
      <ConfirmModal
      confirmModal = {deleteOkModal}
      url="/"
      modalSuccess={modalSuccess}
      setOpenModal={setDeleteOkModal}
      modalTitleText = '스토어 삭제'
      modalText={
            modalSuccess === true
              ? "스토어를 삭제하였습니다. 감사합니다."
              : "스토어 삭제에 실패했습니다. 새로고침 후 다시 시도해주세요."
          }
      modalBtn = '확인'
      />
      :
      null
      }
    {editModal ?
      <ConfirmModal
      confirmModal = {editModal}
      url="/"
      modalSuccess={modalSuccess}
      setOpenModal={setEditModal}
      modalTitleText = '스토어 수정'
      modalText={
            modalSuccess === true
              ? "스토어 정보 수정에 성공하였습니다."
              : "새로고침 후 다시 해주세요."
          }
      modalBtn = '확인'
      />
      :
      null
      }
    </Container>
  )
}

export default AdminEditForm
