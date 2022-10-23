// 타입스크립트 필수문법 정리 및 연습2

// 1. 이름, 나이, 출생지역 담아보기
let userName :string = "chilsung";
let age :number = 23;
let placeOfBirth :string = "seoul";

// 2. 좋아하는 노래와 가수를 object자료로 담기
let singer:{song : string, singer : string} = {
    song : 'where were you in the morning',
    singer : 'shawn Mendes'
}

// 3. 자료에 타입지정해보기
let project:{
    member : string[], 
    days : number, 
    started : boolean
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}