import React from 'react'

function SignupOptions(selectInputHandler) {

  const selectGender = [
      { value : '선택안함' , label : '선택안함'},
      { value : '남자' , label : '남자'},
      { value : '여자' , label : '여자'},
  ]

  const selectAge = [ 
    { value: '선택안함', label: '선택안함' },
    { value: '10대', label: '10대' },
    { value: '20대', label: '20대' },
    { value: '30대', label: '30대' },
    { value: '40대', label: '40대' },
    { value: '50대', label: '50대' },
    { value: '60대 이상', label: '60대 이상' },
  ]

  return (
    <div>
      <label>성별</label>
      <select name = '성별' onChange = {selectInputHandler}>
        {selectGender.map((options,idx)=>{
          return <option 
          key = {idx}
          value = {options.value}
          >{options.label}
          </option>
        })}
      </select>

      <label>연령대</label>
      <select name = '연령대' onChange = {selectInputHandler}>
      {selectAge.map((options,idx)=>{
        return <option 
        key = {idx}
        value = {options.value}
        >{options.label}</option>
      })}
      </select>
    </div>
  )
}

export default SignupOptions
