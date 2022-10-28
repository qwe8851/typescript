//필드값 타입 지정
class Person {
  data:number = 0; //모든 자식들에게 data라는 속성을 부여해주고 싶을때 그냥 변수생성하며 됨(const나 let 키워드 안씀)
}

let john = new Person();
let kim = new Person();

console.log(john.data);
console.log(kim.data); 

john.data = '1'; // 위에서 data를 number타입으로 지정해주어서 number타입 이 아닌 문자 할당 시 에러남



//constructor 타입 지정
class Person2 {
  name; //필드 값으로 name, age가 미리 정의되어있어야 constructor 안에서도 사용가능함
  age;
  constructor (a : string){    //a = 'kim'이런식으로도 타입지정 가능함
    this.name = a;
    this.age = 20;
  }
}



//메소드 타입지정
class Person3 {
  
  add(숫자 : number){ // person3의 자식들이 모두 add라는 함수를 사용가능함
    console.log(숫자 + 1);
  }
}



//숙제1
class Car {
  model : string;
  price : number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax() : number {
    return (this.price * 0.1);
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1)   //콘솔창 출력결과 {model : '소나타', price : 3000}
console.log(car1.tax);  // 콘솔창에 출력결과 300


//숙제2
class Word {
    num;
    str;

    constructor(...param){          //rest parameter (arr타입으로 들어옴)
        let 숫자들 : number[] = [];
        let 문자들 : string[] = [];

        param.forEach((i)=>{    //반복문을 돌려서 타입검사
            if(typeof i === 'string'){
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        })

        this.num = 숫자들;
        this.str = 문자들;
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']