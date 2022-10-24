// 타입변수 & readonly

// type alias 연습
type Animal = {name:string, age:number}
let 동물 :Animal = {name : 'kim', age : 20}


// readonly 연습
const 출생지역 = {region : 'seoul'}
출생지역.region = 'busan' // const변수는 재할당만 불가, 수정은 가능'


type Girlfriend = {
    readonly name : string
}
const 여친 :Girlfriend = { name : '엠버'}
여친.name = '유라' 

// type 변수 union type으로 합치기(extend) 가능
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x:number };
type PositionY = { y:number };
type NewType = PositionX&PositionY; // {x:number, y:number}
let position :NewType = {x:10, y:20};


// 숙제1
type type1_1 = string;
type type1_2 = number | string;
type newType1 = Name | Age;
// let test:newType1 = 'string'

// 숙제2
type newType2 = {
    color? :string,
    size : number,
    readonly position : number[]
}
// let test:newType2 = {
//     size : 123,
//     position : [1,2,3]
// }

// 숙제3
type newType3 = {
    name : string,
    phone : number,
    email : string
}
// let test:newType3 = {
//     name : 'kim',
//     phone : 12341234,
//     email : 'qwe@naver.com'
// }

// 숙제4
type newType4 = {
    adult : boolean
}

let test:newType3 & newType4  = {
    name : 'kim',
    phone : 12341234,
    email : 'qwe@naver.com',
    adult : true
}