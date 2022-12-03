// public, private, protected, static 키워드
// - 이런 객체 지향 언어같은 문법도 제공됨.
// - class를 많이 만들어서 개발하면 유용함





// 1. public 키워드
class User1 {
  public name: string = 'kim';  // public이 붙으면 모든 자식들이 이용가능

  constructor(a) {
    this.name = a;
  }
}

let 유저1 = new User1('park'); // public은 안써도 default값으로 생략되어 있음.
유저1.name = '안뇽';





// 1. private 키워드
class User2 {
  name: string; // 범위 : class 중괄호{}
  private familyName: string = "park";

  constructor(a) {
    this.name = a + this.familyName;
  }

  이름변경함수() {
    this.familyName = "kim";
  }
}

let 유저2 = new User2("민수");
유저2.familyName = "안뇽";    //오류: private타입이라 수정권한이 없음.
console.log(유저2);





// 자식들이 familyName을 바꾸고 싶으면
// 1. class안에 familyName 변경 함수 제작
// 2. 자식들이 사용
유저2.이름변경함수();
console.log(유저2);

// 데이터를 외부로부터 보호하고싶을 때 자주 사용하는 패턴임





// +) public 키워드를 쓰면 this.어쩌구 생략 가능
class Person { 

  constructor(public name: string){   // "이 자리에 들어온 파라미터는 자식의 name속성에 기입"해달라는 뜻
    
  }

}

let 자식 = new Person('kim');
console.log(자식);