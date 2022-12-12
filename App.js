"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var index_1 = require("./index");
function App() {
    var 꺼내온거 = (0, react_redux_1.useSelector)(function (state) { return state; });
    var dispatch = (0, react_redux_1.useDispatch)();
    return (<div className="App">
            {꺼내온거.counter1.count}       {/* counter1.count로 해줘야 내가 만들어둿던 count state가 보임*/}
            {꺼내온거.counter1.user} 
            <button onClick={function () { dispatch((0, index_1.증가)()); }}>버튼</button>
        </div>);
}
