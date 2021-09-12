import React from 'react';
import { Label ,SideSpan ,SelectBox } from './StyledSignup'

interface Options {
  selectInputHandler : any;
}

function SignupOptions({selectInputHandler}:Options) {

  let gender: [{value: string, label: string}[], string] = [
      [
        { value : '선택안함' , label : '선택안함'},
        { value : '남자' , label : '남자'},
        { value : '여자' , label : '여자'},
      ],
      '성별',
  ]

  let age: [{value: string, label: string}[], string] = [
      [
        { value: '선택안함', label: '선택안함' },
        { value: '10대', label: '10대' },
        { value: '20대', label: '20대' },
        { value: '30대', label: '30대' },
        { value: '40대', label: '40대' },
        { value: '50대', label: '50대' },
        { value: '60대 이상', label: '60대 이상' },
      ],
    '연령대'
    ]

    return (
      <SelectBox>
        <Label>{gender[1]}</Label><SideSpan>옵션</SideSpan>
        <select onChange = {(e)=>selectInputHandler(e,gender[1])}>
        {gender[0].map((el,idx)=>{
          return (
            <option
            key = {idx}
            value = {el.value}
            >{el.label}</option>
          )
        })}
        </select>

        <select onChange = {(e)=>selectInputHandler(e,age[1])}>
        {age[0].map((el,idx)=>{
          return (
            <option
            key = {idx}
            value = {el.value}
            >{el.label}</option>
          )
        })}
        </select>
      </SelectBox>

    )
}

export default SignupOptions