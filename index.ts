// 🤔 조건문으로 타입만들기 & infer

// ✨ 조건문 써서 타입생성하기
type Age<T> = T extends string? string : unknown;
let a :Age<string>  // string
let b :Age<number>  // unknown
// 삼항연산자를 통해 타입을 지정해주는데, 조건식은 extends문법으로 사용해야 함



// 퀴즈1. 파라미터로 array자료를 입력하면 array의첫 자료의 타입을 그대로 남겨주고,
// array자료가 아니라면 any타입을 남겨주는 타입 생성하기
type FirstItem<T> = T extends any[] ? T[0] : any;

let age1: FirstItem<string[]>;
let age2: FirstItem<number>; 







// ✨ infer 키워드
// infer 키워드 예시 1.
// 왼쪽에 있는 타입을(T) 추출해서 R에 담아줌
type Person<T> = T extends infer R ? R : unknown;      // R : String
type c = Person<string>;

// infer 키워드 예시 2. array내부의 타입만 뽑고 싶을 떄 
type 타입추출<T> = T extends (infer R)[] ? R : unknown; // infer R : string
type d = 타입추출<string[]>;

// infer 키워드 예시 3. 함수를 넣으면 함수의 return 타입만 뽑고 싶을 떄 
type 타입추출2<T> = T extends ( ()=> infer R )? R : unknown;    // R : void
type e = 타입추출< ()=> void >;




// 함수를 넣으면 함수의 return 타입만 뽑아 쓰고 싶을때는
// => ReturnType이라는 기본 함수를 쓰면 알아서 해줌
type f = ReturnType<() => void>










// 📝 숙제1. 타입파라미터로
// 1. array 타입을 입력하면
// 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
// 3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?
let age3 : Age<[string, number]>;
let age4 : Age<[boolean, number]>;
// (동작예시) 이러면 age3타입을 string, age4타입은 unknown이 되어야함(array나 tuple이나 그게 그거임)
// 이걸 만족ㅎ는 type Age 생성하기 

type Age3<T> = T extends [string, ...any] ? T[0] : unknown;
// 이렇게 해주면 age3은 string, age4는 unknown이 됨.





// 📝 숙제2. 함수의 파라미터의 타입을 뽑아주는 기계 만들기
타입뽑기<(x: number) => voide>;
타입뽑기<(x: string) => voide>;

type 타입뽑기<T> = T extends (x :infer R) => any ? R:any;
// 이렇게하면 a라는 타입이 number로 잘 남음
// 참고로 함수만 들어올 수 있게 제한을 두고 싶으면 
// 언제나 T라는 함수 파라미터 만들 떄 extends로 제한을 두면 됨