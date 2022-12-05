// class에서 사용가능한 protected, static 키워드
// - class를 복사해서 또다른 class를 만들고 싶을 때
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. extends
var User = /** @class */ (function () {
    function User() {
        this.x = 10;
    }
    return User;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser;
}(User));
var 사람 = new NewUser();
console.log(사람);
// 2. protected
// - class{}안에서만 사용 가능한 private키워드와 유사
// - private보단 약간 더 확장성을 제공해줌
var User2 = /** @class */ (function () {
    function User2() {
        this.x = 10; // newUser2에서 사용 불가
        this.y = 10; // newUser2에서 사용 가능
    }
    return User2;
}());
var NewUSer2 = /** @class */ (function (_super) {
    __extends(NewUSer2, _super);
    function NewUSer2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUSer2.prototype.doThis = function () {
        this.x = 20; // 에러
        this.y = 20; // 사용 가능
    };
    return NewUSer2;
}(User2));
// - protected : extends된 class는 사용 가능, 자식들 사용 불가능
// - private : extends된 class는 사용 불가능, 자식들 사용 불가능
// 3. static
// - private/protected/public + static 가능!
var User3 = /** @class */ (function () {
    function User3() {
        this.y = 20;
    }
    User3.x = 10; // static 키워드를 붙이면 부모 class에 직접 부여됨 (+ 자식에게 안물려줌)
    return User3;
}());
var 자식 = new User3();
console.log(자식); // static 키워드를 붙인 x는 나오지 않음.
// 4. static 활용 예시
var User4 = /** @class */ (function () {
    function User4() {
        this.intro = User4.skill + "전문가입니다."; // 그래서 부모class인 User4.skill이라고 써야 함 
    }
    User4.skill = "js"; // static으로 선언된 변수는 부모만 갖다 쓸 수 있음
    return User4;
}());
var 철수 = new User4();
console.log(철수); // js 전문가입니다.
// skill을 js에서 ts로 변경
User4.skill = 'ts';
var 맹구 = new User4();
console.log(맹구); // ts 전문가입니다.
// - 하지만 값을 감추려는 의도라면 protected, private를 쓰는게 더 옳은 방법이라고 할 수 있음.
