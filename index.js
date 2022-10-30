// 함수 rest parameter, destructuring할 때 타입지정
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1. rest parameter
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수(1, 2, 3, 4, 5, 6);
// 1-2. ...spread operation
// array나 object왼쪽에 쓰면 괄호를 벗겨달라는 문법임.
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true); // console 출력결과 : 1,2,3,4,5
console.log(arr3);
// 2. destructuring 
// 2-1. destructuring - arr
var _a = ["안녕", 100], 변수1 = _a[0], 변수2 = _a[1];
console.log(변수1);
console.log(변수2);
// 2-2.destructuring - obj
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age; //변수명과 속성명을 맞추는게 편리(헷갈릴 수 있음)
var _c = { student1: true, age1: 20 }, student1 = _c.student1, age1 = _c.age1; // 변수명과 속성명이 동일하면 생략이 가능함
console.log(student1);
console.log(age1);
// 3. 함수에도 destructuring문법 사용 가능
// ex. obj안에 있던 자료를 파라미터로 집어넣고 싶다면?
var 오브젝트 = { student2: true, age2: 20 }; //1. 이거를
function 함수2(_a) {
    var student2 = _a.student2, age2 = _a.age2;
    console.log(student2, age2); // ture, 20
}
함수2({ student2: true, age2: 20 }); // 2. 이렇게 아예 파리미터로 박어버림
// 숙제 1 
function max() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var result = 0; // 2. 비교할 변수생성
    x.forEach(function (i) {
        if (result < i) { // 4. 파라미터로 들어온 숫자를 계속 result와 비교
            result = i; // 5. result가 i보다 작으면(즉, i가 더 크면) result에 i를 넣음 -> 그리고 다음 숫자와 result를 비교
        } // 6. result가 i보다 작지 않으면!! 걍 냅둠 
    });
    return result; // 7. result return
}
console.log(max(1, 2, 3, 4, 5, 5));
function 함수3(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
함수3({ user: "kim", comment: [3, 5, 4], admin: false });
// 숙제 3
function 함수4(_a) {
    var a = _a.slice(0);
    console.log(a); // 여기도 a, b, c로 가능 & 위에 파라미터 설정해줄때는 대괄호 빼먹지 말기.. 
}
함수4([40, "wine", false]);
