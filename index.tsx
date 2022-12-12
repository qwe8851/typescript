// React + TypeScript 사용할 때 알아야할 점 2
// react 프로젝트라고 가정하고,,

import React from "react";
import ReactDom from "react-dom";
import ".index.css";
import App from "./ App";
import reportWebVitals from "./reportWevVitals";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

// 1. 기존방식

// const 초기값: { count: number } = { count: 0 };

// state - default type 지정문법 : 오른쪽에 타입으로 왼쪽에 자동타입할당됨.
// action - component에서 dispatch()를 날릴 때 거기에 넣는 파라미터랑 같음.
// function reducer(state = 초기값, action: any) {
//   if (action.type == "증가 ") {
//     return { ...state, count: state.count + 1 };
//   } else if (action.type === "감소") {
//     return { ...state, count: state.count - 1 };
//   } else {
//     return 초기값;
//   }
// }
// const store = createStore(reducer);




// 2. @reduxjs/toolkit 사용 
// 이 문법의 장점 
//    1. 함수형태라 보기 좋음. 
//    2. state 수정 시 사본만들필요 없음.

const 초기값 = { count : 0, user: 'kim'};

const counterSlice = createSlice({
  // state, reducer를 object로 정리함(state + reducer합친걸 clice라고 부름)
  name: "counter",
  initialState: 초기값,
  reducers: {
    증가(state) {
      // type지정 필요 X (자동으로 됨)
      state.count += 1; // return할 필요 X
    },
    감소(state) {
      state.count -= 1;
    },
    맘대로증가(state, action: PayloadAction<number>) {
      // 두번째 파라미터인 action은 dispatch()할 대 넣는 파라미터와 같은 타입
      state.count += action.payload;
    },
  },
});

let store = configureStore({
    reducer : {
        counter1 : counterSlice.reducer     // slice 만든거 등록할때 counter1로 작명함.
    }
})  
export type RootState = ReturnType<typeof store.getState>;   // stire변수의 타입 export하는 문법

// 수정방법 만들기 export
export let {증가, 감소, 맘대로증가} = counterSlice.actions

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
