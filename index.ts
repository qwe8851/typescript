// 🤔 object index signatures


// ✨ index signature 쓰면 한번에 object type 지정이 가능
interface StringOnly {
    [key: string]: string; // [key:string] : 모든 문자로 된 속성

    // age: string;     가능
    // age2: 20;        가능
    // age3: number;    불가
}
let user: StringOnly = {
    name: "kim",
    age: "20",
    location: "seoul",
};
user.name;



// 📎 object처럼 사용도 가능
interface NumberOnly1{
    [key: number]: string;  //  [key: string]: string;도 가능
}

let user2: NumberOnly1 = {
    0: "kim",
    1: "20",
    2: "seoul"
}
user2[0];







// ✨ 이런 object 자료 타입지정도 가능
let css: MyType = {  //얘는 타입지정 잘 되어있어서 따로 해주지 않아도 되는데
    'font-size':{
        'font-size':{
            'font-size': 14
        }
    }
}

interface MyType{   // 해주고 싶다면 뭐 똑같이 interface 만들면 됨
    'font-size':{
        'font-size':{
            'font-size': 14
        }
    }
}

// 📎 recursive하게 타입만드는 법
interface recursiveType {       // 중첩해서 사용가능
    'font-size': recursiveType | number;    // 마지막에 14를 받기위한 union number;
}




// *************************************************
// 📝 숙제1. 다음 자료의 타입지정을 해보시오.
let hw1 :indexSignatureType = {
    model: "k5",
    brand: "kia",
    price: 6000,
    year: 2030,
    date: "6월",
    percent: "5%",
    dealer: "김차장",
};
interface indexSignatureType { 
    [key: string] : string|number;
}
// 유연한 타입지정이 가능하지만 엄격하지 않아서 버그를 잡아준다는 장점이 없어질 수 있음



// 📝 숙제2. 다음 object 자료의 타입을 interface를 써서 만들어보시오
let hw2 :recursiveType2 = {
    "font-size": 10,
    secondary: {
        "font-size": 12,
        third: {
            "font-size": 14,
        },
    },
};

interface recursiveType2 {
    [key:string]: recursiveType2 | number;

    // 이렇게 쓰면 더 엄격하게 사용 가능
    // 'font-size' : number,
    // [key:string] : number|recursiveType2;
}