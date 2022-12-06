// class 생성 숙제 

// 숙제1) 다음 x, y속성의 특징을 설명해보십시오.
class User {
  private static x = 10;
  public static y = 10;
}
// 정답
// 1. 필드값은 원래 모든 USer자식들에게 물려주는 속성이지만 
//    x와 y는 static 키워드가 붙었기 때문에 User.x 이런식으로 접근해서 사용할 수 있다.
//    User 자식들은 x와 y를 쓸 수 없다.
// 2. private static x는 class내부에서만 수정이 가능하고
//    public static y는 class 내외부 상관없이 수정이가능하다.
//    public 키워드를 지워도 동일하게 동작한다.
// 3. protected  는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데
//    약간 범위가 넓어서 extends로 복사한 class내부에서도 사용이 가능하다.





// 숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다. 
class User2 {
  private static x = 10;
  public static y = 20;

  static addOne(p) {
    (User2.x += p);
  }

  static printX(){
    console.log(User2.x);
  }
}
User2.addOne(3);
User2.addOne(4);
User2.printX();






// 숙제3) 네모.draw()를 할 때마다 index.html에 가로 30px 세로 30px, 배경색이 'red'의 <div>박스 무작위 배치
class Square {
  constructor(public width:number, public height:number, public color:string) {}

  draw(){
    let random = Math.random();
    let square = `<div style="position:relative;
    top:${random*400}px;
    left:${random*400}px;
    width:${this.width}px;
    height:${this.height}px;
    background:${this.color}px
    </div>`;
    document.body.insertAdjacentHTML('beforeend', square);
  }
}

let 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();
// 1. constructor를 이용해서 새로 뽑는 obj들은 width, height, color를 입력할 수 있게 만들었 음.
// 2. 자식들은 drow()를 쓰면
// 2-1. 0과 1사이의 무작위 숫자를 뽑고, 그걸 변수 random에 저장함
// 2-2. <div>를 디자인함. 근데 <div>박스의 폭, 높이, 색상은 constructor이 입력한 것들을 활용함
// 2-3. <div>박스의 위치는 left, right속성을 이용해 0~400px사이로 무작위 배치함
// 2-4. insertAdjacentHTML이런거 이용하면 원하는 곳에 html을 추가가 가능함

// 그래서 실제로 자식을 하나 뽑아서 drow()했더니 진짜 빨간 박스 4개가 나옴.
// 다른 사이즈, 다른 색상으로도 뽑아서 drow() 이것도 가능하겠군@!