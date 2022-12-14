// ๐ค ์กฐ๊ฑด๋ฌธ์ผ๋ก ํ์๋ง๋ค๊ธฐ & infer

// โจ ์กฐ๊ฑด๋ฌธ ์จ์ ํ์์์ฑํ๊ธฐ
type Age<T> = T extends string? string : unknown;
let a :Age<string>  // string
let b :Age<number>  // unknown
// ์ผํญ์ฐ์ฐ์๋ฅผ ํตํด ํ์์ ์ง์ ํด์ฃผ๋๋ฐ, ์กฐ๊ฑด์์ extends๋ฌธ๋ฒ์ผ๋ก ์ฌ์ฉํด์ผ ํจ



// ํด์ฆ1. ํ๋ผ๋ฏธํฐ๋ก array์๋ฃ๋ฅผ ์๋ ฅํ๋ฉด array์์ฒซ ์๋ฃ์ ํ์์ ๊ทธ๋๋ก ๋จ๊ฒจ์ฃผ๊ณ ,
// array์๋ฃ๊ฐ ์๋๋ผ๋ฉด anyํ์์ ๋จ๊ฒจ์ฃผ๋ ํ์ ์์ฑํ๊ธฐ
type FirstItem<T> = T extends any[] ? T[0] : any;

let age1: FirstItem<string[]>;
let age2: FirstItem<number>; 







// โจ infer ํค์๋
// infer ํค์๋ ์์ 1.
// ์ผ์ชฝ์ ์๋ ํ์์(T) ์ถ์ถํด์ R์ ๋ด์์ค
type Person<T> = T extends infer R ? R : unknown;      // R : String
type c = Person<string>;

// infer ํค์๋ ์์ 2. array๋ด๋ถ์ ํ์๋ง ๋ฝ๊ณ  ์ถ์ ๋ 
type ํ์์ถ์ถ<T> = T extends (infer R)[] ? R : unknown; // infer R : string
type d = ํ์์ถ์ถ<string[]>;

// infer ํค์๋ ์์ 3. ํจ์๋ฅผ ๋ฃ์ผ๋ฉด ํจ์์ return ํ์๋ง ๋ฝ๊ณ  ์ถ์ ๋ 
type ํ์์ถ์ถ2<T> = T extends ( ()=> infer R )? R : unknown;    // R : void
type e = ํ์์ถ์ถ< ()=> void >;




// ํจ์๋ฅผ ๋ฃ์ผ๋ฉด ํจ์์ return ํ์๋ง ๋ฝ์ ์ฐ๊ณ  ์ถ์๋๋
// => ReturnType์ด๋ผ๋ ๊ธฐ๋ณธ ํจ์๋ฅผ ์ฐ๋ฉด ์์์ ํด์ค
type f = ReturnType<() => void>










// ๐ ์์ 1. ํ์ํ๋ผ๋ฏธํฐ๋ก
// 1. array ํ์์ ์๋ ฅํ๋ฉด
// 2. array์ ์ฒซ ์๋ฃ๊ฐ string์ด๋ฉด string ํ์์ ๊ทธ๋๋ก ๋จ๊ฒจ์ฃผ๊ณ  
// 3. array์ ์ฒซ ์๋ฃ๊ฐ string์ด ์๋๋ฉด unknown ์ ๋จ๊ฒจ์ฃผ๋ ค๋ฉด ์ด๋ป๊ฒ ํ์์ ๋ง๋ค์ด๋์ผํ ๊น์?
let age3 : Age<[string, number]>;
let age4 : Age<[boolean, number]>;
// (๋์์์) ์ด๋ฌ๋ฉด age3ํ์์ string, age4ํ์์ unknown์ด ๋์ด์ผํจ(array๋ tuple์ด๋ ๊ทธ๊ฒ ๊ทธ๊ฑฐ์)
// ์ด๊ฑธ ๋ง์กฑใ๋ type Age ์์ฑํ๊ธฐ 

type Age3<T> = T extends [string, ...any] ? T[0] : unknown;
// ์ด๋ ๊ฒ ํด์ฃผ๋ฉด age3์ string, age4๋ unknown์ด ๋จ.





// ๐ ์์ 2. ํจ์์ ํ๋ผ๋ฏธํฐ์ ํ์์ ๋ฝ์์ฃผ๋ ๊ธฐ๊ณ ๋ง๋ค๊ธฐ
ํ์๋ฝ๊ธฐ<(x: number) => voide>;
ํ์๋ฝ๊ธฐ<(x: string) => voide>;

type ํ์๋ฝ๊ธฐ<T> = T extends (x :infer R) => any ? R:any;
// ์ด๋ ๊ฒํ๋ฉด a๋ผ๋ ํ์์ด number๋ก ์ ๋จ์
// ์ฐธ๊ณ ๋ก ํจ์๋ง ๋ค์ด์ฌ ์ ์๊ฒ ์ ํ์ ๋๊ณ  ์ถ์ผ๋ฉด 
// ์ธ์ ๋ T๋ผ๋ ํจ์ ํ๋ผ๋ฏธํฐ ๋ง๋ค ๋ extends๋ก ์ ํ์ ๋๋ฉด ๋จ