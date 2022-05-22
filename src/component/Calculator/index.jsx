import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
  margin-top: 30px;
  width: 500px;
  height: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DisplayNumber = styled.div`
  margin: 20px;
  width: 400px;
  height: 100px;
  border: 1px solid gray;
  text-align: right;
  padding: 20px;
  font-size: 35px;
`;

const NumberWrapper = styled.div`
  margin: 40px 20px 20px 20px;
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const NumberButton = styled.button`
  background-color: white;
  border: 0.5px gray solid;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.btnWidth ? props.btnWidth : "100px")};
  height: 100px;
  :hover {
    background-color: #ccffff;
  }
`;

let num = "";
let result = 0;
let num_array = [];
let sign_array = [];

function Calculator() {
  const [data, setData] = useState("");
  const [isClick, setReset] = useState(false);

  useEffect(() => {
    num = "";
    result = 0;
    num_array = [];
    sign_array = [];
    setData("");
  }, [isClick]);

  const clickButton = (e) => {
    if (e.target.value === "=") {
      num_array.push(parseInt(num));
      result = num_array[0];
      for (let i = 0; i < num_array.length; i++) {
        if (sign_array[i - 1] === "+") {
          result += num_array[i];
        } else if (sign_array[i - 1] === "-") {
          result -= num_array[i];
        } else if (sign_array[i - 1] === "*") {
          result *= num_array[i];
        } else if (sign_array[i - 1] === "/") {
          result /= num_array[i];
        }
      }
      setData(result);
    } else if (!isNaN(e.target.value)) {
      //숫자를 눌렀을 때
      num += e.target.value;
      setData((prev) => prev + e.target.value);
    } else {
      //연산자 눌렀을 때
      sign_array.push(e.target.value);
      num_array.push(parseInt(num));
      console.log(sign_array);
      setData("");
      num = "";
    }
  };

  return (
    <CalculatorWrapper>
      <DisplayNumber>{data}</DisplayNumber>
      <NumberWrapper>
        <NumberButton value="7" onClick={clickButton}>
          7
        </NumberButton>
        <NumberButton value="8" onClick={clickButton}>
          8
        </NumberButton>
        <NumberButton value="9" onClick={clickButton}>
          9
        </NumberButton>
        <NumberButton value="/" onClick={clickButton}>
          /
        </NumberButton>
        <NumberButton value="4" onClick={clickButton}>
          4
        </NumberButton>
        <NumberButton value="5" onClick={clickButton}>
          5
        </NumberButton>
        <NumberButton value="6" onClick={clickButton}>
          6
        </NumberButton>
        <NumberButton value="*" onClick={clickButton}>
          x
        </NumberButton>
        <NumberButton value="1" onClick={clickButton}>
          1
        </NumberButton>
        <NumberButton value="2" onClick={clickButton}>
          2
        </NumberButton>
        <NumberButton value="3" onClick={clickButton}>
          3
        </NumberButton>
        <NumberButton value="-" onClick={clickButton}>
          -
        </NumberButton>
        <NumberButton value="clear" onClick={() => setReset(true)}>
          @
        </NumberButton>
        <NumberButton value="0" onClick={clickButton}>
          0
        </NumberButton>
        <NumberButton value="+" onClick={clickButton}>
          +
        </NumberButton>
        <NumberButton value="=" onClick={clickButton}>
          =
        </NumberButton>
      </NumberWrapper>
    </CalculatorWrapper>
  );
}

export default Calculator;
