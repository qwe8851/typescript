import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, 증가 } from "./index";
import { Dispatch } from "redux";

function App(){
    const 꺼내온거 = useSelector((state: RootState) => state);
    const dispatch :Dispatch = useDispatch();
    return(
        <div className = "App">
            {꺼내온거.counter1.count}       {/* counter1.count로 해줘야 내가 만들어둿던 count state가 보임*/}
            {꺼내온거.counter1.user} 
            <button onClick={()=>{ dispatch(증가())}}>버튼</button>
        </div>
    );
}