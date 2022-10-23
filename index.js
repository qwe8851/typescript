// union type, any, unknown 연습
//union type
var 회원들 = [1, '2', 3]; //1. array안에 number또는 string이 들어올 수 있음
var 회원들2 = ['2']; //2. number 또는 array안에 string만 들어올 수 있음
var obj = { a: 1 }; //obj의 경우
//any
var 이름; //type 실드 해제 문법, 모든 자료형을 허용해줌
이름 = 123;
이름 = [];
//unknown
var 이름2; //any와 유사, 이게 조금 더 안전
이름2 = 123;
이름2 = [];
// any VS unknown
var 변수1 = 이름; //any : 에러 안남
var 변수2 = 이름2; //unknown : 에러 
이름 - 1; //any : 에런 안남
이름2 - 1; //unknown : 에러
// 엄격한 타입스크립트
var unknown나이 = 1;
var union나이;
var string나이;
var number나이;
unknown나이 + 1; // unknown타입 : 에러
union나이 + 1; //union타입 : 에러
string나이 + 1; // stirng타입 : 에러 안남
number나이 + 1; // number타입 : 에러 안남
// 숙제 1
var user = 'kim';
var age = undefined;
var married = false;
var friend = [user, age, married];
// 숙제 2
var 학교 = {
    score: [100, 90, 80],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// 숙제 1
