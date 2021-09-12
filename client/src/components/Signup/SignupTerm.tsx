import React,{ useState ,useEffect } from 'react';
import Modal from '../common/Modal/Modal'
import { Label ,SideSpan } from './StyledSignup'

interface Term {
  isAllchecked : any,
  setIsAllchecked : any,
}

function SignupTerm({isAllchecked,setIsAllchecked}:Term) {

  const [openModal , setOpenModal] = useState(false);
  const [modalText , setModalText] = useState(false);
  const [checkedInputs, setCheckedInputs]:any = useState([]);

  const termModalHandler = (data : any) => {
    setModalText(data);
    setOpenModal(true);
  }
  const closeModal = () => {
    setOpenModal(false);
  };

  const changeHandler = (checked:any, id:any) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      console.log('--chk 반영--',checked)
    } else {
      setCheckedInputs(checkedInputs.filter((el: any) => el !== id));
      console.log('--chk 해제반영--',checked)
    }
  };

  //isAllchecked 가 false 라면 return false;
  //isAllchecked 를 false 로 두고 props 로 전달받아서 유즈이펙트로 조건건후 setisallchek 이면 트루변경
  useEffect(() => {
    if(checkedInputs.length === 4) {
      setIsAllchecked(true);
    }
  }, [checkedInputs]);

  console.log('==',setIsAllchecked , isAllchecked)
  console.log(checkedInputs)
  // const isAllchecked = checkedInputs.length === 4
  const termErr = !isAllchecked;

  //약관 : 이용자 이용약관, 개인정보 취급정책, 위치기반 서비스 이용약관, 이벤트 동의 있어야함.
  const termArr = [
    [
      `이용자 이용약관`,
      `본 최종이용자 이용약관(이하 “본 약관”)은 주식회사 UptoDoor(이하 “공급사업자”)의 서비스,\n
      UptoDoor(“본 서비스”)에 대한 당신(“최종이용자”)의 접근 및 이용을 규정합니다.`,
    ],
    [
      `개인정보 취급정책`,
      `UptoDoor는 최종이용자가 서비스에 처음 가입할 때 또는 모바일 앱 혹은 웹 앱 서비스를 이용하는 과정에서 홈페이지, 어플리케이션 등을 통하여 최종이용자의 성과 이름, 스마트폰 등 단말기 정보(OS버전 및 기기정보), 이메일, 비밀번호가 필수로 수집됩니다. 이러한 과정에서 네이버나 구글 계정 인증 시에는 사용자가 직접 네이버나 구글에 로그인하여 (주) UptoDoor에게 개인정보 제공을 허용함에 동의해야 하며, 동의 및 인증 후 UptoDoor는 사용자가 가입 버튼을 눌러 완료한 후에만 Access Token을 이용해 사용자의 개인정보를 받아 저장합니다. Access Token 은 가입시 일회만 사용되며 가입 완료 후 UptoDoor가 저장하지 않습니다. 
      \n
      이메일 인증 시에는 직접 입력한 이메일 정보만을 수집하여 인증을 합니다. 또한 개별 이동통신 번호는 선택적으로 수집됩니다.
      \n
      최종이용자의 기기가 연결된 네트워크 IP 주소 정보는 통신과정에서 수집될 수 있으며 최고관리자나 관리자가 지점의 근무지 IP 주소를 설정 때 사용할 수 있습니다. 최종이용자가 출퇴근/휴식 기록 시 기기가 연결된 네트워크의 IP 주소가 서버에 전달되어 지점 혹은 조직에 설정된 IP 주소로 연결되어 있는지 확인한 후 바로 폐기됩니다. UptoDoor는 최종이용자의 자발적인 행동없이 IP 주소를 절대 수집하지 않습니다.
      \n
      최종이용자가 유료 서비스를 이용하는 과정에서 결제 등을 위하여 신용카드 정보, 통신사 정보, 세금계산서 발행 등을 위한 고유번호 등과 같이 결제에 필요한 정보가 수집될 수 있습니다.
      서비스 이용 기록, 접속로그, 접속 IP 정보, 제재 및 이용정지 기록, 장애 관련 정보 등이 생성되어 수집 및 보관될 수 있습니다. 이러한 개인정보는 서비스 프로그램의 실행 또는 사용 과정에서 수집되거나 협력회사로부터의 제공 및 생성정보 수집 툴을 통해 수집됩니다.
      `,
    ],
    [
      `위치기반 서비스 이용약관`,
      `본 약관은 주식회사 UptoDoor는(이하 UptoDoor)가 제공하는 위치기반서비스에 대해 UptoDoor와 \n
      위치기반서비스를 이용하는 개인위치정보주체(이하 “최종이용자”)간의 권리·의무 및 책임사항, 기타 필요한 사항 규정을 목적으로 합니다.`,
    ],
    [
      `마케팅 활용동의 및 광고수신 동의`,
      `이거만 옵셔널로 뺴고싶은데 모리아픔\n
      제1조(목적)\n이 약관은 회원(이 약관에 동의한 자를 말합니다 이하 "회원"이라고 합니다.)\n
      방문자가 회원가입 시 이벤트/혜택 소식 수신여부 항목(E-Mail, SMS)이 생성됩니다. 회원은 가입 후 정보수정을 통해 수신 여부를 변경할 수 있습니다.`
    ],
  ];

  return (        
    <div>
      <Label>이용약관 동의</Label><SideSpan>필수</SideSpan><br/>
      {termArr.map((el,idx)=>{
        return (
          <div key = {idx} className = 'term-array'>
            <input
            type = 'checkbox'
            name = 'terms'
            value = 'terms'
            className = 'terms'
            id = {`${idx+1}th term`}
            onChange = {e=>
              {changeHandler(e.currentTarget.checked ,`${idx+1}th term` )}}
            checked={checkedInputs.includes(`${idx+1}th term` ) ? true : false}
            />

            <label htmlFor = {`${idx+1}th term`}/>
            <span 
            onClick={() => termModalHandler(el[1])}
            >{el[0]}</span>
          </div>
        )
      })}
      
      {termErr ? 
          <p>약관에 모두 동의하셔야 합니다.</p> 
          : null}

      <Modal
        openModal={openModal}
        closeModal={closeModal}
        modalText={modalText}
        modalBtn="확인"
      />
    </div>
  )
}

export default SignupTerm