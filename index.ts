// 🤔 object 타입 변환기 만들기

// ✨ keyof 키워드
let obj = { name: "kim", age: 20 };
Object.keys(obj);       // ['name', 'age'] : obj안의 key값들을 모두 array자료안에 담아서 출력해줌


interface Person{
    age : number, 
    name : string
}

type PersonKeys = keyof Person; // number|string : union타입으로 만들어줌
let a : PersonKeys = 'name';

// index signature에다가 keyof를 쓰면
interface PsersonSignature{
    [key :string]: number;
}
type PsersonSignatureKeys = keyof PsersonSignature;
let b :PsersonSignatureKeys = 'name';






// ✨ 타입변환기 (mapping)
type Car = {
    color : boolean;
    model : boolean;
    price: boolean | number;
}

type TypeChanger<MyType> ={ //1. MyType에 Car타입이 들어옴
    [key in keyof MyType] : string;
}
// 2. keyof MyType : MyType의 key값들을 모두 뽑아 union type으로 생성
//    'color', 'mdoel', 'price'
// 3. key in~ : 왼쪽의 key값이 오른쪽에 있는 union type에 있으면
// 4. :string; : string type으로 지정

type 새로운타입 = TypeChanger<Car>;







// 📝 숙제1. 아래 타입을 타입 변환기 돌리기
// color, model, price 속성은 전부 string 또는 number 타입이어야 한다.
type Bus = {
    color : string;
    model : boolean;
    price: number;
}
type BusChanger<MyType> = {
    [key in keyof MyType] : string|number;
}
type NewBus = BusChanger<Bus>;



// 📝 숙제2. obj안의 모든 속성을 string, number처럼 고정된 타입으로 변환하는것이 아니라
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기 만들기
// 📎위에 버스타입 씀
type BusChanger2 <MyType, T> = {
    [key in keyof MyType]:T;
}
type numbBus2 = BusChanger2<Bus, boolean>;
type numbBus3 = BusChanger2<Bus, string[]>;
// 이렇게 쓰면 BusChanger2를 쓸 떄마다 타입파라미터를 T자리에 하나 더 입력할 수 있게 됨.
// 그러면 이제 오브젝트 모든 속성은 T로 변경됨