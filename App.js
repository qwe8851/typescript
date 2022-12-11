"use strict";
// React + TypeScript 사용할 때 알아야할 점
// react 프로젝트라고 가정하고,, 
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./ App.css");
var box = <div></div>;
function App() {
    // state는 타입지정이 알아서 잘 됨. 할필요 X
    var _a = useState('kim'), user = _a[0], setUser = _a[1];
    return (<div>
            <h4>안녕하세요</h4>
            <Profile name="철수" age="20"></Profile>
        </div>);
}
function Profile(props) {
    return (<div>{props.name}입니다.</div>);
}
