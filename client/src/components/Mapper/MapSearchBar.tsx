import React from 'react'
import { 
  MapSearchInput,
  MapForm
} from './styledMap'
import { SmallButton } from '../common/Button/Button'

interface MapSearchProps {
  inputRef : any,
  searchSubmitHandler : any,
  // setLocation : (latLng: number[]) => void,
  // setAddress? : (address: string) => void,
  // addressRef : any,
}

function MapSearchBar({
  inputRef , searchSubmitHandler ,
  } : MapSearchProps) {

  return (
    <>
      <MapForm onSubmit={searchSubmitHandler}>
        <MapSearchInput 
        ref = {inputRef}
        type = 'text' 
        placeholder = '동네 구독서비스를 조회하세요.'/>
        <SmallButton
        className = 'map-search-btn'
        primary
        >
          <i className="fas fa-search-location"></i>
        </SmallButton>
      </MapForm>
    </>
  )
}

export default MapSearchBar


// const [locationList, setLocationList] = useState<any[]>([]);
//   const [inputValue, setInputValue] = useState<string | null>(null);
//   const [liIdx, setLiIdx] = useState(-2);

//   const handleChangeLocation = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//     setLiIdx(-2);
//   }, []);

//   const handleEnterKey = (event: React.KeyboardEvent) => {
//     if (event.key === 'Enter') {
//       if (!inputValue || inputValue.length === 0 || locationList.length === 0) {
//         // dispatch(openModal({ type: 'error', text: '거래할 지역을 입력해주세요.' }));
//         console.log('지역없음.')
//       } else {
//         let index;
//         if (liIdx < 0) {
//           index = 0;
//         } else if (liIdx >= locationList.length) {
//           index = locationList.length - 1;
//         } else {
//           index = liIdx;
//         }
//         const { address, lat, lng } = locationList[index];
//         selectLocationData(address, lat, lng);
//         setLiIdx(-2);
//         inputRef.current?.focus();
//         event.preventDefault();
//       }
//     }
//   };

//   const handleKeyDown = (event: React.KeyboardEvent) => {
//     if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
//       if (inputValue && event.key === 'ArrowDown' && liIdx < locationList.length - 1) {
//         const numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//         const lastStr = inputValue.slice(-1);
//         if (liIdx === -2) {
//           if (numberArr.indexOf(lastStr) !== -1) {
//             setLiIdx((prevIdx) => prevIdx + 3);
//           } else {
//             setLiIdx((prevIdx) => prevIdx + 2);
//           }
//         } else {
//           setLiIdx((prevIdx) => prevIdx + 1);
//         }
//       } else if (event.key === 'ArrowUp' && liIdx > 0) {
//         setLiIdx((prevIdx) => prevIdx - 1);
//       }
//       event.preventDefault();
//     } else if (event.key === 'Escape' && inputRef.current) {
//       setInputValue('');
//       inputRef.current.value = '';
//       event.preventDefault();
//     }
//   };

//   const selectLocationData = useCallback(
//     (address?: string | string[], lat?: string, lng?: string) => {
//       setLocation([Number(lat), Number(lng)]);

//       if (address && setAddress) {
//         let myAddress;
//         if (Array.isArray(address)) {
//           myAddress = `${address[0]} (${address[1]})`;
//         } else {
//           myAddress = address;
//         }
//         setAddress(myAddress);
//         if (addressRef?.current) {
//           addressRef.current.textContent = myAddress;
//         }
//       }

//       setLocationList([]);
//       if (inputRef.current) {
//         inputRef.current.value = '';
//       }
//     },
//     [setAddress, setLocationList],
//   );