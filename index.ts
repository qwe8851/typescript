// Object 타입지정(interface) 연습해보기

// interface 
interface Square {  // class 만드는 법이랑 유사함 
  color : string,   // 콤마(,)말고 세미콜론(;) 가능
  width : number
}

let 네모 :Square = { color : 'red' , width : 100 }




// interfaceextends문법 연습
interface Student {
  name: string;
}
interface Teacher extends Student { // extends 문법 사용 가능
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };


// &기호 (intersection type) : extends와 유사 
type Animal = { name: string };
type Cat = { age: number } & Animal;

let 고양이: Cat = { name: "나비", age: 3 };


  // type VS interface
  // - interface는 중복선언 가능
  // - type은 중복선언 불가능