import React,{useCallback,useState,useEffect} from 'react'
import Select from 'react-select';
import TimePicker from "rc-time-picker";
import moment from "moment";
import './style.css'
import {
  AdminForm,
  FlexBox,
  StoreIntroTextArea,OpenCloseInputWrapper,
  StoreBtnBox,StoreInputBox,
  StoreInput,
  StoreAddressWrapper,
  StoreAddressBtn
} from '../AdminPost/StyledAdminPost'
import {Container,Wrapper,Title} from "../GlobalStyle";
import { BtnBox, SmallButton } from '../common/Button/Button';

import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import {  adminStoreEdit , adminStoreDelete,AdminStoreGetData } from '../../_actions/admin_action';

import AdminUploadStoreEdit from './AdminUploadStoreEdit'
import AdminUploadMenuEdit from './AdminUploadMenuEdit'
import WarningModal from '../common/Modal/WarningModal'
import ConfirmModal from '../common/Modal/ConfirmModal';

import Auth from '../../hoc/auth'
import Signin from '../common/Signin/SigninModal'

import axios from 'axios';
import { END_POINTS } from '../../_actions/type';
import { AdminInfo,Menu } from '../../@type/adminInfo';
import useInput from '../../utils/useInput'
import { RootReducerType } from "../../store/store";

function AdminEditForm() {

  const dispatch:any = useDispatch();
  const admin:AdminInfo = useSelector((state:RootReducerType) => state.admin);
  //모달 수정, 삭제
  const [loginModal , setLoginModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deleteOkModal, setDeleteOkModal] = useState<boolean>(false);
  const [modalSuccess , setModalSuccess] = useState<boolean>(false);

  //upload store img,file
  const [storeFile , setStoreFile]:any = useState(null);
  
  const [description , onChangeDescription, setDescription]:any = useInput('');
  const [mobile , setMobile] = useState('');
  const [storeinfo, setStoreinfo]:any = useState({});
  const [imageArr, setImageArr] = useState<Object[] | []>([]);
  const [menuArr, setMenuArr] = useState<Menu[] | []>([]);
   //주소, 카테고리, 가게이름
  const title = admin.name;
  const category = admin.category;
  const adminAddress = admin.address;
  const adminAddressDetail = admin.address_detail;
  
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
  //!폼제출 핸들러
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();   
    // if(!storeImgArr || !title || !description || !time ||
      // ! adminAddress || !mobile || storeFile || !menuArr){
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
      dispatch(adminStoreEdit(sendInfo, storeinfo.id))
      .then((res:any)=>{
        if (res.payload.message === 'update success') {
          dispatch(AdminStoreGetData()).then((res: any) => {
            if (res.payload.message === "ok") {
          setModalSuccess(true);
              setEditModal(true)
      }
          })
        }
      }).catch((err:void) => {
          setModalSuccess(false);
          setEditModal(true)
      })
  }
  //! store 삭제
  const deleteStoreHandler = () => {
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
        setDescription(store_info.introduce) 
        setOpenTime(store_info.open_time)
        setCloseTime(store_info.close_time)
        setMobile(store_info.number)
        setStoreFile(store_info.Business_paper)
        setMenuArr(store_info.menus)
    })
  },[])
  // console.log('admin.opentime::',admin.open_time);
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('')
  const moment1 = moment();
  console.log(moment1)
  const [changeOpenMoment, setChangeOpenMoment] = useState(moment1);
  const [changeCloseMoment, setChangeCloseMoment] = useState(moment1);
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

  useEffect(() => {
    const request = Auth(true);
    if(request === undefined){
      setLoginModal(true);
    }
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
              placeholder='150자 이내로 작성해주세요.'
              maxLength="150"
              onChange={onChangeDescription}
                />
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
                  // inputReadOnly
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
          <StoreInputBox>
      <label>가게주소</label>
      <StoreAddressWrapper>
      <StoreInput 
        readOnly
        type="text"
        defaultValue = {adminAddress} 
        />

        <StoreInput 
        type="text"
        defaultValue={adminAddressDetail}
        readOnly
        />
      </StoreAddressWrapper>
    </StoreInputBox>

          <StoreInputBox>
            <label>모바일</label>
            <StoreInput 
            required
            type = 'text' 
            placeholder = '모바일'
            value = {mobile} 
            onChange = {changeMobileHandler}/>
          </StoreInputBox>

        <AdminUploadMenuEdit
          addMenuHandler={(menus: {})=>addMenuHandler(menus)}
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
    admin.orders.length === 0 ?
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
      <ConfirmModal
      openModal = {deleteModal}
      setOpenModal={setDeleteModal}
      modalTitleText = '가게 삭제가 불가합니다.'
      modalSubText = '이미 구독중인 고객들이 있습니다.'
      modalText = '더 자세한 사항은 고객센터를 통해 문의해주세요.'
      modalBtn='닫기'
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
      url="/adminpage"
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

    {loginModal ? 
    <Signin
    modalOpen = {loginModal}
    setModalOpen = {setLoginModal}
    request = {Auth(true)===undefined}
    url = '/adminedit'
    />
    :
    null}
    </Container>
  )
}

export default AdminEditForm
