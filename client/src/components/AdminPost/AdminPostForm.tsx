import React, { useState, useCallback, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {  useDispatch } from 'react-redux'
import { adminStorePost,AdminStoreGetData } from '../../_actions/admin_action';
import Select from 'react-select';
import TimePicker from "rc-time-picker";
import moment from "moment";
import '../AdminEdit/style.css'
import {
  AdminForm,
  FlexBox,
  StoreInputBox,
  StoreInput,
  StoreIntroTextArea,
  StoreBtnBox,OpenCloseInputWrapper
} from './StyledAdminPost'
import { Container, Wrapper, Title } from "../GlobalStyle";

import { SmallButton } from '../common/Button/Button';
import AdminUploadStore from  './AdminUploadStore';
import AdminEnrollStore from './AdminEnrollStore'
import AdminUploadMenu from './AdminUploadMenu';
import AdminFileUpload from './AdminFileUpload';
import Auth from '../../hoc/auth'
import Signin from '../common/Signin/SigninModal'
import ConfirmModal from '../common/Modal/ConfirmModal';


import useInput from '../../utils/useInput'

type MenuArr = {
  menuImg: string;
  menuName: string;
  menuDescription: string;
  price: number;
}

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
  const [loginModal , setLoginModal] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalSuccess, setModalSuccess] = useState<boolean>(false);
  const [removeRejectModal , setRemoveRejectModal] = useState<boolean>(false);

  //upload store img,file
  const [storeImgArr , setStoreImgArr] = useState<Object[] | []>([]);
  const [storeFile, setStoreFile] = useState<string | ''>('');
  const [category, setCategory] = useState<string | ''>('');
  const [mobile , setMobile] = useState<string | ''>('');

  const [title, onChangeTitle] = useInput('');
  const [description , onChangeDescription] = useInput('');
  
  const [adminAddress , setAdminAddress] = useState<string | ''>('');
  const [adminAddressDetail, onChangeAdminAddressDetail]:any = useInput('');
  const [addressModal, setAddressModal] = useState<boolean>(false);
  const [xValue, setXValue] = useState<string | ''>('');
  const [yValue, setYValue] = useState<string | ''>('');

  const [menuArr, setMenuArr] = useState<MenuArr[] | []>([{
    menuImg : './images/icon/menu-add.png',
    menuName:'', menuDescription:'', price:0
  }]);

  const changeCategoryHandler = (e:any) => {
    setCategory(e.value)
  }

  const changeAdminAddress = useCallback((data): void => {
    setAddressModal(false);
    switchAddress(data.address);
    setAdminAddress(data.address);
  }, [])

  const changeMobileHandler = useCallback((e):void => {
    const mobileRegExp = /^[0-9\b -]{0,13}$/;
    if(mobileRegExp.test(e.target.value)){
      setMobile(e.target.value);
    }
  }, [])
  
  useEffect(() => {
    if (mobile.length === 10) {
      setMobile(mobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (mobile.length === 13) {
      setMobile(mobile.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [mobile]);
  
  //!add menu onchange handler
  const addMenuHandler = (menu: any):void => {
    const bin = {
      menuImg: './images/icon/menu-add.png',
      menuName:'', price:0, menuDescription:''}
    setMenuArr([...menuArr, bin]);
  };
  //!remove menu onclick handler
  const removeMenuHandler = (e:any):void => {
    if(menuArr.length > 1){
      const filtering = menuArr.filter((el:any) => el !== menuArr[e.target.id])
      setMenuArr(filtering);
    }else{
      console.log('최소 한개의 메뉴가 있어야합니다.')
      // setOpenModal(true)
      // setRemoveRejectModal(true)

    }
  }
  //!upload storeimg
  const updateStoreImg = (storeImgs:any):void => {
    setStoreImgArr(storeImgs)
  }
  const updateStoreFile = (addressFile:any):void => {
    setStoreFile(addressFile)
  }
  //!폼제출 핸들러
  const submitHandler = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    if (adminAddressDetail.length === 0) return alert("상세 주소란을 입력해주세요.");
    if(
      !storeImgArr || !description || ! adminAddress 
      || !storeFile || !menuArr
      ){
      //모달
      return alert('all section must be filled')
    }else{
      const adminPostInfo = {
      title:title,
      category:category,
      description:description,
      mobile : mobile,
      open_time: openTime,
      close_time:closeTime,
      adminAddress : adminAddress,
      adminAddressDetail: adminAddressDetail,
      menu:menuArr,
      storeImage:storeImgArr,
      storeFile : storeFile,
      xvalue:xValue,
      yvalue:yValue,
    }
      dispatch(adminStorePost(adminPostInfo))
      .then((res:any) => {
        if (res.payload.message === 'Store registration is complete') {
          dispatch(AdminStoreGetData())
            .then((res: any) => {
              if (res.payload.message === "ok") {
                setModalSuccess(true);
          setOpenModal(true);
              }
          })
        }
      })
    }
  }
  //!kakao add
  const switchAddress = useCallback((address):void => {
    const geocoder = new kakao.maps.services.Geocoder();
    //! 주소를 좌표로
    geocoder.addressSearch(address, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
        setYValue(result[0].x);
        setXValue(result[0].y);
      }
    });
  }, []);

  const handleClickCancel = ():void => {
    history.push('/');
  }

  const [openTime, setOpenTime] = useState<string | ''>('');
  const [closeTime, setCloseTime] = useState<string | ''>('')
  const monent = moment();
  const [changeOpenMoment, setChangeOpenMoment] = useState(monent);
  const [changeCloseMoment, setChangeCloseMoment] = useState(monent);
  const str =  "HH:mm";
  const onChangeOpenTime = (value: any):void => {
    setChangeOpenMoment(value);
    setOpenTime(value && value.format(str));
  }
  const onChangeCloseTime = (value: any):void => {
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
    <Title>가게 등록</Title>
    <form onSubmit = {(e)=>submitHandler(e)}>
      <Wrapper>
      <FlexBox>
        <AdminForm>
        {/* 업로드 컴포넌트 */}
        <AdminUploadStore 
        updateStoreImg = {updateStoreImg}/>
          <StoreInputBox>
            <label>상호명</label>
            <StoreInput 
            required
            type = 'text'
            defaultValue = {title} 
            placeholder = '가게 이름을 적어주세요' 
            onChange = {onChangeTitle}/>
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
              placeholder='150자 이내로 작성해주세요.'
              maxLength="150"
              onChange = {onChangeDescription}/>
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
          {/* 주소등록 컴포넌트 */}
          <AdminEnrollStore
            addressModal = {addressModal}
            setAddressModal = {setAddressModal}
            adminAddress = {adminAddress}
            changeAdminAddress = {changeAdminAddress}
            onChangeAdminAddressDetail = {onChangeAdminAddressDetail}
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

          {/* 가게 사업자등록증 파일업로드 */}
            <AdminFileUpload
            updateStoreFile = {updateStoreFile}
          />

        <AdminUploadMenu
          addMenuHandler={addMenuHandler}
          removeMenuHandler = {removeMenuHandler}
          menuArr = {menuArr}
          setMenuArr = {setMenuArr}
        />
        <StoreBtnBox>
          <SmallButton 
          type = 'submit' 
          primary
          > 등록 </SmallButton>

          <SmallButton 
          type = 'button'
          onClick = {handleClickCancel}
          > 취소 </SmallButton>
        </StoreBtnBox>
        
        </AdminForm>
        </FlexBox>
      </Wrapper>
    </form>

      {openModal ?
      <ConfirmModal
        modalSuccess={modalSuccess}
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalTitleText="스토어 등록"
        modalText={modalSuccess
          ? "가게 신청이 완료되었습니다. 승인까지 1-2일 걸립니다."
          : "새로고침 후 다시 시도해주세요."
        }
        modalBtn="확인"
        url='/mypage'
      />
      : 
      null}

      {/* {openModal && removeRejectModal ?
      <ConfirmModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalTitleText="삭제 불가"
        modalText = {removeRejectModal 
          ? '최소 한개의 메뉴가 있어야 합니다.'
          :null
        }
        modalBtn="확인"
      />
      : 
      null} */}

      {loginModal ? 
      <Signin
      modalOpen = {loginModal}
      setModalOpen = {setLoginModal}
      request = {Auth(true)===undefined}
      url = '/adminpost'
      />
      :
      null}
  </Container>
  )
}

export default AdminPostForm