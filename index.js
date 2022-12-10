// 1. 타입을 파라미터로 입력하는 Generic
function 함수(x) {
    return x[0]; // 4 return
}
var a = 함수([4, 2]);
console.log(a); // a는 number가 아닌 unknown타입
console.log(a + 1); //a가 unknow타입이기 때문에 연산 안됨.
// 해결책1. 여기서 narrowing하거나 as쓰거나 하면 됨.
// 해결책 2. Generic 함수 만들기
//           Generic 함수는 파라미터로 타입을 입력하는 함수임.
function genericFunc(x) {
    return x[0];
}
var b = genericFunc([4, 2]);
console.log(a);
// Generic 함수 장점 : 확장성이 있음. (매번 다른 타입을 출력 가능하다)
var c = genericFunc(['4', '2']);
// 2. Generic함수의 타입파라미터 제한두기 
function typeLimiteFunc(x) {
    return x - 1;
}
var d = typeLimiteFunc(100);
function customTypeFunc(x) {
    return e.length;
}
var e = customTypeFunc(['100']);
// Summary
// 1. 함수에 타입파타미터 넣을 수 있음
// 2. extends 키워드로 넣을 수 있는 타입 제한 가능
// 3. class에도 타입파라미터 넣을 수 있음
// 숙제1. 문자를 넣으면 문자의 갯수, array를 넣으면 array 안의 자료 갯수를 콘술창에 출력
function hw1(x) {
    console.log(x.length);
}
hw1("hello");
hw1(["kim", "park"]);
var data = '{"name": "dog", "age: 1}';
function jsonConversionFunc(x) {
    return JSON.parse(x); // JSON → object
}
var result = jsonConversionFunc(data);
console.log(result);
// +) Q. as쓰면 안되나? return값 오른쪽에 as Animal하드코딩하면 <>필요 없을듯?
// A. ㄴㄴ 확장성이 없음. Generic쓰면 Animal말고도 다른 타입으로 변환이 가능하잖슴.
// 숙제 3. class 수정하기
// 아래의 class는 new Person('어쩌구')  라고 문자를 집어넣엇는데 any타입이 name속성에 부여됨.
// 이게 싫어서 파라미터에 string을 집어넣으면 string타입, 
// number를 넣으면 number타입,
// string[]을 집어넣으면 string[]타입이 되게 Generic을 이용해 수정하시오!
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var person = new Person("어쩌구");
person.name; // string 타입이 됨.
// 파라미터를 입력할 수 있게 만들었음
// 그럼 이제 new Person을 쓸 때마다 타입 파라미터를 입력할 수 있게 되며 내맘대로 타입지정이 가능해진다
