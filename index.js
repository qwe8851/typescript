// array자료에 붙일 수 있는 tuple type
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 🤔 [tuple type]
// 위치까지 고려한 엄격한 타입지정 가능
// - 첫 자료는 무조건 string
// - 둘째 자료는 무조건 boolean
var 멍멍 = ["dog", true];
// 👇
var 멍멍2 = ["dog", true];
// ✨ tuple 안에 옵션표시 가능
var 멍멍option = ["dog"];
// 1. 순서 주의!
var 멍멍option2 = ["dog", 3];
// - option은 마지막에만 쓸 수 있음
// - 두개이상도 가능!
var 멍멍option3 = ["dog", true];
// ✨ 함수에서 쓰는 tuple
function 함수() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
}
함수(1, '2');
// 그냥 일반 함수 파라미터 타입지정 VS rest parameter
//  - rest파라미터를 사용한 함수는 파라미터가 array[]에 담겨져 온다는 차이가 있음.
// ✨ ...spread operator
var arr = [1, 2, 3];
var arr2 = __spreadArray([4, 5], arr, true); // 4, 5, 1, 2, 3 : 괄호를 벗겨줌
// ...spread operator의 타입지정은?
var arr3 = __spreadArray([4, 5], arr, true);
// 📝 숙제 1) 음식의 1.이름 2.가격 3.맛있는지 여부을 array 자료에 담아보고 타입지정
var greenTea = ['동서녹차', 4000, true];
var greenTeaA = ["동서녹차", 4000, true, false, true, true, false, true];
// 📝 숙제 2) 함수 타입지정
//  - 첫번째 파라미터는 문자, 
//  - 두번째는 boolean,
//  -  세번째는 숫자 또는 문자
function hw2() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
}
hw2("1", true, 2, "3", "4", 5, 6);
// 📝 숙제 3) 문자/숫자 분류기 생성
//  - 파라미터 중 문자와 숫자를 각각 모아 []에 담기
//  - 문자 숫자 외에는 자료 입력 불가능 
//  - 파라미터/ return 타입 지정
function Classification() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [[], []];
    rest.forEach(function (a) {
        if (typeof a === "string") {
            result[0].push(a);
        }
        else {
            result[1].push(a);
        }
    });
    return result; // return 타입 동일 
}
Classification("b", 5, 6, 8, "a");
// 1. 함수 파라미터는 rest parameter로 여러개를 입력 받을 수 있음. 타입은 (string|number)[]
// 2. 결과를 저장할 result변수 생성. 기본값은 [[],[]]. 타입은 tuple type 활용
// 3. rest parameter 반복문 돌림.
