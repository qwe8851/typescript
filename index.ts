
// 1. ts파일에서 js파일을 가져다 쓰고 싶으면 declare를 써주면 됨
// (data.js
declare let a : number;
console.log(a + 1);



// 2. ts파일끼리의 변수사용은 import export
import { b } from './data2';
console.log(b + 1);



// 📎 ts특 : 모든 ts파일은 ambient module(글로벌 모듈)
// - 그래서 ts파일끼리는 import export없이도 다른 파일에 있던 변수들을 가져다 쓸 수 있음.

// 📎 ts파일을 ambient모듈이 아니라 로컬 모듈로 만드는 법 
// - ts파일 안에 import export가 있으면 자동으로 로컬모듈이 된다.
export {} // 로컬모듈


declare global{
    // 로컬모듈에서 글로벌 변수를 만들때 사용 (타입/인터페이스 만들때 주로 활용)
    type Dog = string;
}