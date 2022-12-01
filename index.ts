// Narrowing 할 수 있는 방법 더 알아보기

// 1. &&연산자로 null & undefined 타입 체크하기
function func(a: string | undefined) {
  if (a && typeof a === "string") {
    // case1. a가 undefined면 실행이 되지 않음.
    // case2. a가 string이면 괄호 안에가 실행됨( turn가 남을 것임.)
  }
}





// 2. in키워드로 object narrowing 가능
// - 형식 : 속성명 in 오브젝트자료
// - 서로 가진 속성명이 다를때 쓰면 좋음(배타적인 속성)
type Fish = { swim: string };
type Bird = { fly: string };

function func2(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}





// 3. instanceof연산자로 object narrowing
// - 형식 : 오브젝트 instanceof 부모class
// - 오브젝트의 부모가 누구인지 검사해주는게 instanceof
// - object 두 개가 비슷하면 부모 class가 누군지 물어봐서 narrowing 가능
let 날짜 = new Date();

if (날짜 instanceof Date) {
}





// 4. object 타입마다 literal type으로 narrowing하기
// - 아래와 같은 경우 배타적인 속성이 아니므로 in키워드 불가
// - 부모 class가 없으므로 instanceof도 불가
// - 비슷한 object타입의 경우 literal type을 강제로 만들어두면 도움됨
type Car = {
  wheel: "4개";   // literal type
  color: string;
};
type Bike = {
  wheel: "2개";   // literal type
  color: string;
};

function func3(x: Car | Bike) {
  if(x.wheel === '4개'){
    console.log('x는 Car 타입입니다~');
  }
}





// Summary
// 논리적으로 이 타입인지 특정지을 수 있다면 type narrowing으로 인정해줌