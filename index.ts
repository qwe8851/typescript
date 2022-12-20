// 🤔 implements 키워드

// interace는 object타입지정할 떄 씀.
// 하지만 용도가 하나 더 있는데 class타입을 확인하고 싶을 떄도 imterface문법을 사용할 수 있음.
// 근데 implements키워드도 필요함






// ✨ implements 키워드
class Car {
    model: string;
    price: number = 1000;

    constructor(a: string) {
        this.model = a;
    }
}

let 붕붕이 = new Car("morning");
// class Car로부터 생산되는 object들은 model과 price속성을 가지게 됨
// 근데 class가 module,price속성을 가지고 있는지 타입으로 확인하고싶을때
// imterface + implements키워드로 확인하면 됨.



interface CarType2{
    model: string;
    price: number;
}

class Car2 implements CarType2{
    model: string;
    price : number = 1000;

    constructor(a:string){
        this.model = a;
    }
}

let 붕붕이2  = new Car2('morning');
// class이름 우측에 implements를 쓰고 imterface 이름을 쓰면
// "이 class가 imterface에 있는 속성을 다 들고있냐"라고 확인이 가능해짐
//  - 그래서 다 갖고 있으면 별 말 안해주고
//  - 빠진 속성이 있으면 에러로 알려줌







// ✨ implements는 타입지정문법이 아님
// implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻임
// class에다가 타입을 할당하고 변형시키는 키워드는 아님
interface CarType3 {
    model: string,
    tax: (price: number) => number;
}

class Car3 implements CarType3 {
    model;  // any 타입이 됨
    tax(a) {    // a 파라미터는 any타입이 됨.
        return a * 0.1;
    }
}
// 지금은 CarType3를 implements했냐고 써봤음.
// 근데 CarType에 있던 model: string이런게 반영되는건 아님. class안에서의 model은 any타입임.
// class 함수도 마찬가지로 함수에 있던 number타입이 전혀 반영되지 않았음.

// 💡 결론은 implements는 class타입을 체크하는 용도지 할당하는게 아님을 명시! 해야 함