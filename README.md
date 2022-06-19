# 멋쟁이 사자처럼 10기 FE 4주차 과제 🦁

# 실습 1번문제

InputSample 컴포넌트는 name과 nickname을 입력받아서 render시키는 컴포넌트 입니다. 해당 기능을 수행하기 위해 주석이 있는 부분을 채워 기능을 완성시켜 봅시다<br>
![image](https://user-images.githubusercontent.com/77886826/167911379-d2877351-6507-4c26-8b49-fbb647980b0d.png)<br>
![image](https://user-images.githubusercontent.com/77886826/167911449-35a018d5-8405-42d2-ad4c-56e88af3a5e8.png)<br>

주석을 채워서 name과 nickname 을 입력받아 봅시다!
해당하는 페이지는 /component/input 페이지 입니다.

ex) <br>
![image](https://user-images.githubusercontent.com/77886826/167907952-0b89c5e1-db78-40c0-90f6-8e2ee8b54d88.png)
<br>
현재 상태입니다.<br>

https://user-images.githubusercontent.com/77886826/167908055-e3287bcf-5176-4188-8222-0773abc215d5.mov

<br>
다음과 같이 입력받을 때 name, nickname 등이 수정되도록 바꾸어 주세요 또한 reset 버튼을 사용하면 모든 입력값이 초기화되도록 해주세요!<br>
<br>

## 🦁 < 실습 1번 해결 방법>

- 1번 과제를 해결하기 위해서는 useState를 import 해주어야 합니다.

```javascript
import React, { useState } from "react";
```

- 다음은 useState를 사용해 문제를 해결한 코드입니다.

```javascript
function InputSample() {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");

  const onChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    else setNickName(e.target.value);
  };

  const onReset = () => {
    setName("");
    setNickName("");
  };

  return (
    <div>
      <InputWrapper>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange}
          value={nickname}
        />
        <button onClick={onReset}>초기화</button>
      </InputWrapper>

      <ViewWrapper>
        값 : {name === "" ? "이름이 없습니다." : name}
        닉네임: ({nickname === "" ? "닉네임이 없습니다." : nickname})
      </ViewWrapper>
    </div>
  );
}

export default InputSample;
```

- 삼항연산자를 사용하여 name이 입력되면 name을 담는 InputWrapper에 입력한 것이 표시되도록, nickname이 입력되면 nickname을 담는 InputWrapper에 입력한 것이 표시되도록 합니다.
- 이와 같이 기능하기 위해서는 useState라는 것을 사용하여 name이 입력됐을 때와 nickname이 입력되었을 때의 event 함수를 작성해주면 됩니다.
- 그리고 reset 버튼이 클릭될 시 입력한 값들이 초기화 되도록 하였습니다.

## < 실습 1번 결과 >

<br>

# 실습 2번문제

우리를 아주 거슬리게 하는 경고가 있습니다...ㅠ

![image](https://user-images.githubusercontent.com/77886826/167908932-02e6913b-02e6-4774-8939-43125eb32082.png)
![image](https://user-images.githubusercontent.com/77886826/167909006-f5dfa5c9-b7b2-49c9-a71f-16db78a9dd4f.png)
경고를 직접 읽어보시고 문제를 해결해주세요!! 해당 오류를 읽어보면 useEffect의 deps에 count가 없다고 하는데 과연...?!

<br>
 ### 목표)
 해당 button을 클릭할 때마다 숫자가 count되어 올라가도록 만들어주세요!(오류 수정후에도)
 해당 경고의 발생원인과 해결방법을 꼭 적어주세요!
 해당 경고를 완벽하게 지워주세요!!

### 제한조건

- 해당 문제는 useState 와 useEffect를 모두 사용해야 합니다.
- useEffect의 deps에 해당하는 부분에서 eslint를 무시하는 방법은 사용하면 안됩니다.

## 🦁 <실습 2번 해결 방법>

해당 오류는 useEffect의 deps에 해당하는 isClick 함수에 count라는 변수가 없기 때문이 발생한 오류입니다. 따라서 setCount 함수 부분을 다음과 같이 arrow function으로 수정해주면 해결됩니다.

```javascript
const Problem = () => {
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    setCount((count) => count + 1);
  }, [isClick]);
```

## < 실습 2번 결과>

<br>

# 실습 3번문제

대망의 끝판왕 계산기 컴포넌트를 제작합니다!
어떤 방법을 사용하셔도 괜찮습니다. 이번에는 통상적으로 알고있는 계산기로서의 기능이 다 들어가 있기만 하면 됩니다!! 디자인에 너무 부담가지지 않으셔도 좋습니다.

https://user-images.githubusercontent.com/77886826/167910647-88da0576-8467-4b1b-9849-48f78da49c15.mov

### 제한조건

- useState를 필수적으로 사용합니다.
- 마지막 = 버튼을 사용할 때 useEffect를 이용하여 값을 출력시킵니다.
- 계산결과가 나올때마다 화면에 표시해야 합니다.

## 🦁 < 실습 3번 해결 방법 >

1. 계산기 디자인 구현

```javascript
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
        <NumberButton value="clear" onClick={() => setReset(!isClick)}>
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
```

- 계산기를 구성하기 위해 display: grid를 사용하여 4\*4 형태의 grid를 생성해주었습니다.
- :hover를 통해 마우스가 버튼 위로 올라갔을 때 버튼의 background-color이 변경되도록 하였습니다.

2. 계산기 기능 구현

```javascript
let num = "";
let num_array = [];
let sign_array = [];

function Calculator() {
  const [data, setData] = useState("");
  const [isClick, setReset] = useState(false);

  useEffect(() => {
    setData("");
    num = "";
    num_array = [];
    sign_array = [];
  }, [isClick]);

  const clickButton = (e) => {
    if (e.target.value === "=") {
      num_array.push(parseInt(num));
      num = num_array[0];
      for (let i = 0; i < num_array.length; i++) {
        if (sign_array[i - 1] === "+") {
          num += num_array[i];
        } else if (sign_array[i - 1] === "-") {
          num -= num_array[i];
        } else if (sign_array[i - 1] === "*") {
          num *= num_array[i];
        } else if (sign_array[i - 1] === "/") {
          num /= num_array[i];
        }
      }
      setData(num);
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
```

- 계산기의 data를 저장하고 data를 처리하기 위한 useState 함수와, reset 버튼을 처리하기 위한 useState 함수를 정의하였습니다.
- 먼저 reset 버튼을 설명하자면, reset 버튼을 누르기 전까지는 default값이 "false" 였던 것이 @ 버튼을 누르면 "true"로 바뀌어 입력한 숫자와 연산기호가 모두 초기화 되도록 구현하였습니다.
- 다음으로 계산기의 전반적인 기능을 설명하자면, clickButton 함수를 통해 숫자가 눌렸을 경우와 연산기호가 눌렸을 때를 if-else문으로 구분하였습니다.  
  숫자가 눌렸을 경우 연산기호가 눌리기 전까지 연속적으로 값을 저장하도록 하였습니다. 예를들어 1과 3을 눌렀을 때 1, 3으로 저장되는 것이 아닌 13으로 저장되도록 구현하였습니다.  
  그리고 연산기호가 눌렸을 경우 여태 눌린 숫자들을 num_array에 저장하고, 현재 눌린(=e.target.value) 또한 sign_array에 저장하였습니다.
- 그리고 = 버튼이 눌릴 경우 num_array와 sign_array에 저장된 것들을 순서에 맞게 불러와서 계산합니다.

## < 실습 3번 결과 >

<br>

# 실습 결과

https://user-images.githubusercontent.com/100702397/169689705-c6ebe291-0931-4c3e-a845-16dc7708528f.mp4
