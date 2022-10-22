// 타입스크립트 필수문법 정리 및 연습

class User {
    name :string;
    constructor(name : string){
        this.name = name;
    }
}

function 함수 (x : number) : number{
    return x *2
}

type 타입  = string | number
type Member = [number, boolean];
type Member2 = {name : string}
type Member3 = {[key: string] : string}

let john:Member = [123, true];
let park : Member2 = {name : 'kim'}
let a : 타입 = 123;