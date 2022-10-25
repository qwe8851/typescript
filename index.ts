// 함수 methods에 type alias 지정하는 방법

//함수 표현식을 사용해서 함수타입 지정
// 연습1
type 함수타입 = (a:string) => number;

let 함수:함수타입 = function(){
    return 10;
}

//연습 2
type NumOut = (x:number, y:number) => number;
let ABC:NumOut = function(x,y){return x+y}


//methods 안에 타입 지정
//숙제 1
type Member = {
    name: string,
    age : number,
    plusOne : (x:number) => number,
    changeName : () => void
}
let 회원정보 : Member = {
    name : 'kim',
    age : 20,
    plusOne(x){
        return x +1
    },
    changeName : ()=>{
        console.log('안녕');
    }
}
회원정보.plusOne(1)
회원정보.changeName();


//숙제 2
type CutType = (x:string) => string;

let cutZero:CutType = function(x){
    let result = x.replace(/^0+/, "");
    return result;
}

function removeDash(x:string) : number{
    let result = x.replace(/-/g, "");
    return parseFloat(result);
}

// 숙제 3 - 어려움 ㅜ 보고풀었음
// 타입없이 먼저 작성
function func3(x, func1, func2){
    let result = func1(x);    // string타입 x라는 파라미터를 func1함수에 삽입, 결과를 result에 저장
    let result2 = func2(result);    // 윗줄의 결과를 func2에 삽입
    console.log(result2);   // 최종 결과를 콘솔창에 출력
}
func3('010-0000-0000', cutZero, removeDash);

// 타입지정(최종코드)
type type1 = (x:string) => string;  
type type2 = (x:string) => number; // 데쉬를 없앳으니 문자만 남음

function func4(x:string, func1:type1, func2:type1){
    let result = func1(x);
    let result2 = func2(result);   
    console.log(result2);   
}
func3('010-0000-0000', cutZero, removeDash);