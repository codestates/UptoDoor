import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LandingMapWrapperContainer } from "./StyledLanding";
import LandingMap from "./LandingMap";
import LandingMapSelect from "./LandingMapSelect";
import { getStoreData, storeFilterByCity } from "../../_actions/store_action";
import { RootReducerType } from "../../store/store";
import { StoreInfo } from "../../@type/storeInfo";

function LandingMapWrapper() {
  const dispatch: any = useDispatch();
  const store = useSelector((state: RootReducerType) => state.store);
  const [city, setCity] = useState("당신 동네");
  const [filterCityList, setFilterCityList] = useState([]);

  const onChangeSeoulCity = (e: any) => {
    if (e.value === "ALL") {
      setCity("당신 동네");
    } else {
      setCity(e.value);
    }
    dispatch(storeFilterByCity(e.value));
  };

  useEffect(() => {
    dispatch(getStoreData());
  }, []);

  useEffect(() => {
    setFilterCityList(store);
  }, [store]);

  return (
    <LandingMapWrapperContainer>
      <LandingMapSelect
        city={city}
        filterCityList={filterCityList}
        onChangeSeoulCity={onChangeSeoulCity}
      />
      <LandingMap city={city} />
    </LandingMapWrapperContainer>
  );
}

export default LandingMapWrapper;
