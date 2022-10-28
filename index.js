//필드값 타입 지정
var Person = /** @class */ (function () {
    function Person() {
        this.data = 0; //모든 자식들에게 data라는 속성을 부여해주고 싶을때 그냥 변수생성하며 됨(const나 let 키워드 안씀)
    }
    return Person;
}());
var john = new Person();
var kim = new Person();
console.log(john.data);
console.log(kim.data);
john.data = '1'; // 위에서 data를 number타입으로 지정해주어서 number타입 이 아닌 문자 할당 시 에러남
//constructor 타입 지정
var Person2 = /** @class */ (function () {
    function Person2(a) {
        this.name = a;
        this.age = 20;
    }
    return Person2;
}());
//메소드 타입지정
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    Person3.prototype.add = function (숫자) {
        console.log(숫자 + 1);
    };
    return Person3;
}());
//숙제1
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return (this.price * 0.1);
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1); //콘솔창 출력결과 {model : '소나타', price : 3000}
console.log(car1.tax); // 콘솔창에 출력결과 300
//숙제2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === 'string') {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
