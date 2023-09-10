import React from "react";
import "./Square.css";

// export default function Square({ onClick, value }) {
const Square = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;

/* -----------------------------------------------------------
props는 부모 컴포넌트 -> 자녀 컴포넌트로 전달
자녀 컴포넌트에서는 state 변경 X
*/

/* -----------------------------------------------------------
react state: 데이터가 변할 때 화면을 리렌더링
- state 생성 : constructor(props) {
  super(props);
  this.state = {
    value: null,
  };
- state 변경 : this.setState({ value: "X" });
- state 이용 : {this.state.value}
*/

/* -----------------------------------------------------------
super()
- 자식 클래스 내에서 부모 클래스의 생성자, 메소드를 호출할 때 사용
- this 키워드 사용되기 전에 호출되어야 함
- super에 props를 인자로 전달하는 이유
  - React.Component 객체가 생성될 때 props 속성을 초기화하기 위해 부모 - 컴포넌트에게 props를 전달
  - 생성자 내부에서도 this.props를 정상적으로 사용할 수 있도록 보장하기 위해서
  */
