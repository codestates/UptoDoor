import React , {useState, useCallback ,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  LandingMapWrapperContainer,
  H4} from './StyledLanding'
import LandingMap from './LandingMap';
import LandingMapSelect from './LandingMapSelect'
import {getStoreData} from '../../_actions/store_action'
const { kakao }: any = window;

function LandingMapWrapper() {

  const dispatch:any = useDispatch();
  const store = useSelector((state:any) => state.store);
  const [city , setCity] = useState('당신 동네')
  const [filterCityList , setFilterCityList] = useState([]);
  // const [switched, setSwitched ] = useState("");
  
  const onChangeSeoulCity = (e:any,data:any) => {
    //지도 : 선택한 서울시티가 바뀔때마다 필터시티리스트에 업데이트
    // console.log('====store chk====',store);
    // console.log('====evalue : ====',e.value)
    // e.value 가 되면 안된다 .. ?
    console.log('스위치된 데이터',data);
    switchAddress(data)
    console.log(switchAddress);
    const filtered = store.filter((el:any)=>{
      return el.address === e.value
    })
    setFilterCityList(filtered);
    setCity(e.value);
  }

  const switchAddress = useCallback((address) => {
    const geocoder = new kakao.maps.services.Geocoder();
    //! e.value 값이 
    console.log('받은 어드레스',address)
    geocoder.addressSearch(address, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
        console.log("현재결과는 ???? ", result)
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // setYValue(result[0].x);
        // setXValue(result[0].y);
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback)
      }
    });
    const callback = (result:any, status:any) => {
    //? 좌표로 도로명 주소 정보 요청
      if (status === kakao.maps.services.Status.OK) {
      console.log("주소-------1",result[0].address.address_name.split(" ")[1])
      // setSwitched(result[0].address.address_name.split(" ")[1]);
    }
    };
  }, []);

  useEffect(() => {
    dispatch(getStoreData())

  }, [])

  //option의 e.value 가 될부분
  useEffect(() => {
    setFilterCityList(store);
  }, [store])

  return (
    <LandingMapWrapperContainer>

      <LandingMapSelect 
      city = {city}
      filterCityList = {filterCityList}
      // onChangeSeoulCity = {(data)=>onChangeSeoulCity(data)}
      onChangeSeoulCity = {onChangeSeoulCity}
      />

      <LandingMap
      // onChangeSeoulCity = {(data)=>onChangeSeoulCity(data)}
      onChangeSeoulCity = {onChangeSeoulCity}
      city = {city}
      />
    </LandingMapWrapperContainer>
  )
}

export default LandingMapWrapper
