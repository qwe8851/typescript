// React + TypeScript 사용할 때 알아야할 점
// react 프로젝트라고 가정하고,, 


import React from "react";
import "./ App.css";

let box: JSX.Element = <div></div>;

function App() {

    // state는 타입지정이 알아서 잘 됨. 할필요 X
    let [user, setUser] = useState('kim');

    return (  
        <div>
            <h4>안녕하세요</h4>
            <Profile name = "철수" age="20"></Profile>
        </div>
  );
}

function Profile(props : { name: string, age:number}): JSX.Element {
  return (
    <div>{props.name}입니다.</div>
  )
}
