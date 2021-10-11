/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Chart from "react-apexcharts";
import Select from "react-select";

import {
  StyledTtlUserChart,
  ChartContainer,
  ChartTtlUseryWrapper,
  ChartContentsWrapper,
  ChartTitle,
  ChartText,
  Column1,
  Column2,
} from "./StyledAnalysis";

function AnalysisTtlUser({ chartStart, second, chart }) {
  const [selectGender, setSelectGender] = useState("");
  const gender = [
    { value: "남자", label: "남자" },
    { value: "여자", label: "여자" },
  ];
  const onChangeGender = (e) => {
    setSelectGender(e.value);
  };

  //!male
  let key = Object.keys(chart[0]);
  let values = Object.values(chart[0]);
  let ttlArr = [];
  for (let i = 0; i < values.length; i++) {
    let tmp = [];
    for (let el of values[i]) {
      let values = Object.values(el)[0];
      tmp.push(values);
    }
    ttlArr.push({ name: key[i], data: tmp });
  }

  //!female
  let femaleKey = Object.keys(chart[1]);
  let femaleValues = Object.values(chart[1]);
  let femaleTtlArr = [];
  for (let i = 0; i < femaleValues.length; i++) {
    let femaleTmp = [];
    for (let el of femaleValues[i]) {
      let femaleValues = Object.values(el)[0];
      femaleTmp.push(femaleValues);
    }
    femaleTtlArr.push({ name: femaleKey[i], data: femaleTmp });
  }

  //!male data
  const options1 = {
    //바 높이줄이기
    labels: ["10대", "20대", "30대", "40대", "50대", "60대이상"],
    chart: {
      stacked: true,
    },
    colors: [
      "rgb(0, 143, 251)",
      "rgb(33, 158, 252)",
      "rgba(10, 148, 251, 0.85)",
      "rgba(72, 175, 252, 0.85)",
      "rgba(117, 194, 253, 0.85)",
      "rgba(140, 204, 253, 0.85)",
    ],

    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      labels: {
        formatter: function (val) {
          return val;
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetX: 10,
    },
    noData: {
      text: "Loading...",
    },
  };
  const series1 = ttlArr;

  //!femle data
  const options2 = {
    labels: ["10대", "20대", "30대", "40대", "50대", "60대이상"],
    chart: {
      stacked: true,
    },
    colors: ["#fadeef", "#f598d3", "#ed77c2", "#faaadd", "#eb5bb6", "#fa3cb4"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      labels: {
        formatter: function (val) {
          return val;
        },
      },
    },
    yaxis: {
      title: {
        text: "",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetX: 10,
    },
  };
  const series2 = femaleTtlArr;

  return (
    <ChartContainer id="chart">
      <StyledTtlUserChart chartStart={chartStart}>
        <Column1>
          <ChartContentsWrapper second={second}>
            <ChartTitle>
              사용자 별, <br />
              많이 찾는 카테고리는?
            </ChartTitle>
            <ChartText>
              성별 및 연령대별 많이찾는 카테고리를 차트로 확인하세요.
            </ChartText>
            <Select
              className="gender-selection selection"
              options={gender}
              placeholder="성별을 선택해주세요"
              onChange={onChangeGender}
            />
          </ChartContentsWrapper>
        </Column1>

        <Column2>
          <ChartTtlUseryWrapper second={second}>
            {selectGender === "여자" ? (
              <Chart
                className="ttl-user-chart"
                options={options2}
                series={series2}
                type="bar"
                height="400px"
              />
            ) : (
              <Chart
                className="ttl-user-chart"
                options={options1}
                series={series1}
                type="bar"
                height="400px"
              />
            )}
          </ChartTtlUseryWrapper>
        </Column2>
      </StyledTtlUserChart>
    </ChartContainer>
  );
}

export default AnalysisTtlUser;
