// 함수 methods에 type alias 지정하는 방법
var 함수 = function () {
    return 10;
};
var ABC = function (x, y) { return x + y; };
var 회원정보 = {
    name: 'kim',
    age: 20,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
}
// 숙제 3 - 어려움 ㅜ 보고풀었음
// 타입없이 먼저 작성
function func3(x, func1, func2) {
    var result = func1(x); // string타입 x라는 파라미터를 func1함수에 삽입, 결과를 result에 저장
    var result2 = func2(result); // 윗줄의 결과를 func2에 삽입
    console.log(result2); // 최종 결과를 콘솔창에 출력
}
func3('010-0000-0000', cutZero, removeDash);
function func4(x, func1, func2) {
    var result = func1(x);
    var result2 = func2(result);
    console.log(result2);
}
func3('010-0000-0000', cutZero, removeDash);
