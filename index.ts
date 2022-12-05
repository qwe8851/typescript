// class에서 사용가능한 protected, static 키워드
// - class를 복사해서 또다른 class를 만들고 싶을 때




// 1. extends
class User {
  x = 10;
}

class NewUser extends User {
  //User class에 있던 내용을 NewUser에 복붙해줌
}

let 사람 = new NewUser();
console.log(사람);




// 2. protected
// - class{}안에서만 사용 가능한 private키워드와 유사
// - private보단 약간 더 확장성을 제공해줌
class User2 {
  private x = 10;   // newUser2에서 사용 불가
  protected y = 10; // newUser2에서 사용 가능
}

class NewUSer2 extends User2{
  doThis(){
    this.x = 20;    // 에러
    this.y = 20;    // 사용 가능
  }
}
// - protected : extends된 class는 사용 가능, 자식들 사용 불가능
// - private : extends된 class는 사용 불가능, 자식들 사용 불가능




// 3. static
// - private/protected/public + static 가능!
class User3 {
  static x = 10;    // static 키워드를 붙이면 부모 class에 직접 부여됨 (+ 자식에게 안물려줌)
  y = 20;
}

let 자식 = new User3();
console.log(자식);    // static 키워드를 붙인 x는 나오지 않음.




// 4. static 활용 예시
class User4 {
  static skill = "js";    // static으로 선언된 변수는 부모만 갖다 쓸 수 있음
  intro = User4.skill + "전문가입니다.";    // 그래서 부모class인 User4.skill이라고 써야 함 
}
let 철수 = new User4();
console.log(철수);    // js 전문가입니다.

// skill을 js에서 ts로 변경
User4.skill = 'ts';

let 맹구 = new User4();
console.log(맹구);    // ts 전문가입니다.

// - 하지만 값을 감추려는 의도라면 protected, private를 쓰는게 더 옳은 방법이라고 할 수 있음.