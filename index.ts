// literal types와 const문법

// literal type - 더 엄격한 관리 가능 
let 누구세요 :'대머리' | '솔로';
누구세요 = '대머리';

function 함수(a:'hello') :1|0{
    return 0;
}
함수('hello');

function 가위바위보(a:'가위'|'바위'|'보') :('가위'|'바위'|'보')[]{
    return ['가위'];
}
가위바위보('가위');


// const 변수
let 자료 ={
    name : 'kim'
} // 자료.name을 콘솔창에 뽑아보면 kim이 나옴

function 내함수(a:'kim'){ // 파라미터 타입에 "타입이 kim만 들어올 수 있다"라고 지정해준 것
    //"kim"이라는 자료만 들어올 수 있습니다 X
    //"kim"이라는 타입만 들어올 수 있습니다 O
}
내함수(자료.name);  //그래서 이렇게 하면 string타입이 들어오므로 에러가 남 


// const - 솔루션 1
let 자료2 :{name:'kim'} = { // 애초에 타입을 kim으로 지정해주면
    name : 'kim'
}
function 내함수2(a:'kim'){

}
내함수2(자료2.name) // 에러가 나지 않음


// const - 솔루션 2(as const)
let 자료4 = { 
    name : 'kim'
} as const

function 내함수4(a:'kim'){

}
내함수2(자료4.name)


// as const
// 1. 타입을 object의 value로 바꿔줌 ('kim'으로 타입 변경)
// 2. object안에 있는 모든 속성을 readonly로 변경 (변경하면 에러 발생)
