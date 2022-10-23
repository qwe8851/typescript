// 함수에 타입지정 & void 타입
// 함수 타입지정
function 함수(x) {
    return x * 2;
}
함수(2);
// 함수 타입지정 - void
function 함수2(x) {
    // return x*2
}
함수2(); //에러 - 파라미터를 안넣어주었기 때문
// 함수 타입지정 - 파라미터 옵션 설정
function 함수3(x) {
}
함수3();
// 퀴즈1
function 함수4(x) {
    if (x === 'number')
        console.log(x + 1);
}
함수4(2);
// 숙제 1
function exam1(x) {
    if (x)
        console.log("\uD558\uC774 +".concat(x));
    else
        console.log("\uC785\uB825\uC548\uD568");
}
//숙제 2
function exam2(x) {
    return x.toString().length; //숫자는 length를 붙일 수 있음
}
// 숙제 3
function exam3(money, house, charm) {
    var score = 0;
    score += money;
    if (house == true)
        score += 500;
    if (charm == '상')
        score += 100;
    if (score >= 600)
        return ("결혼가능");
}
console.log(exam3(1000, true, '상'));
