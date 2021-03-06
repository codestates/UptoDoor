import React from "react";
import Select from "react-select";
import { Label, SelectBox } from "./StyledMypageEdit";

type IProps = {
  selectInputHandler: (e: any, name: string) => void;
  userGender: string;
  userAge: string;
};

function ProfileEditOptions({
  selectInputHandler,
  userGender,
  userAge,
}: IProps): JSX.Element {
  const gender: [{ value: string; label: string }[], string] = [
    [
      { value: "선택안함", label: "선택안함" },
      { value: "남자", label: "남자" },
      { value: "여자", label: "여자" },
    ],
    "성별",
  ];

  const age: [{ value: string; label: string }[], string] = [
    [
      { value: "선택안함", label: "선택안함" },
      { value: "10대", label: "10대" },
      { value: "20대", label: "20대" },
      { value: "30대", label: "30대" },
      { value: "40대", label: "40대" },
      { value: "50대", label: "50대" },
      { value: "60대 이상", label: "60대 이상" },
    ],
    "연령대",
  ];

  const selectedGenderOption = gender[0].find((el: any) => {
    if (el.value === userGender) {
      return el;
    }
  });
  const selectedAgeOption = age[0].find((el: any) => {
    const age1 = { userAge };
    if (el.value === age1) {
      return el;
    }
  });

  return (
    <SelectBox>
      <Label>{gender[1]}</Label>
      <Select
        className="gender-selection selection"
        options={gender[0]}
        name={gender[1]}
        placeholder={userGender}
        defaultValue={selectedGenderOption}
        onChange={(e: any) => selectInputHandler(e, gender[1])}
      />

      <Label>{age[1]}</Label>
      <Select
        className="age-selection selection"
        options={age[0]}
        name={age[1]}
        placeholder={userAge}
        defaultValue={selectedAgeOption}
        onChange={(e) => selectInputHandler(e, age[1])}
      />
    </SelectBox>
  );
}

export default ProfileEditOptions;
