// d.ts
//  : 타입 정의 보관용 파일

export type Age = number;
// d.ts파일은 자동으로 글로벌 모듈이 아님 주의!
// - export import 문법으로 다른 ts파일에서 import 가능

// 하지만 지금처럼 tsconfig.json에서 "typeRoots":["./types"]속성을 추가해줬으므로
// types폴더 안의 파일들을 글로벌 모듈로 사용할 수 있게된다.


// typeScript 공식페이지에서 라이브러리별 타입서치 가능
// npm i @types/jquery 이런식설치를 하면 node_modules/@types폴더에 있는 타입들은 글로벌 모듈임

// 근데 위에처럼 tsconfig.json에 typeRoots속성을 써줬다면 자동으로 @types를 포함해주지 않음
// 그래서 추가해주던지 typeRoots를 지우던지 해야 함.
