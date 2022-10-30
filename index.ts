// 함수 rest parameter, destructuring할 때 타입지정

// 1. rest parameter
function 함수(...a :number[]){  // 점 3개 붙이면 rest parameter / 인입될 파라미터의 개수를 모를때 쓸 수 있음(다른 파라미터와 같이 쓸 때 맨 뒤에 써야 함)
  console.log(a);
}
함수(1,2,3,4,5,6)

// 1-2. ...spread operation
// array나 object왼쪽에 쓰면 괄호를 벗겨달라는 문법임.
let arr1 = [1,2,3];
let arr2 = [4,5];
let arr3 = [...arr1, ...arr2];  // console 출력결과 : 1,2,3,4,5
console.log(arr3);



// 2. destructuring 
// 2-1. destructuring - arr
let [변수1, 변수2] = ["안녕", 100];
console.log(변수1);
console.log(변수2);
// 2-2.destructuring - obj
let { student: student, age: age } = { student: true, age: 20 };  //변수명과 속성명을 맞추는게 편리(헷갈릴 수 있음)
let { student1, age1 } = { student1: true, age1: 20 };  // 변수명과 속성명이 동일하면 생략이 가능함
console.log(student1);
console.log(age1);



// 3. 함수에도 destructuring문법 사용 가능
// ex. obj안에 있던 자료를 파라미터로 집어넣고 싶다면?
let 오브젝트 = { student2: true, age2: 20 };  //1. 이거를

type 함수2 = { 
  student2: boolean;
  age2: number;
}

function 함수2({ student2, age2 }: 함수2) {  // 3. 그리고 함수에 destructuring문법 사용
  console.log(student2, age2); // ture, 20
}
함수2({ student2: true, age2: 20 });  // 2. 이렇게 아예 파리미터로 박어버림



// 숙제 1 
function max(...x : number[]) :number{  // 1. number 타입의 rest parameter 생성
  let result = 0; // 2. 비교할 변수생성
  x.forEach((i) => {  // 3. 반복문 생성
    if(result < i){   // 4. 파라미터로 들어온 숫자를 계속 result와 비교
      result = i;   // 5. result가 i보다 작으면(즉, i가 더 크면) result에 i를 넣음 -> 그리고 다음 숫자와 result를 비교
    } // 6. result가 i보다 작지 않으면!! 걍 냅둠 
  })
  return result;  // 7. result return
}
console.log(max(1,2,3,4,5,5));


// 숙제 2
type 함수3 = {
  user: string;
  comment: number[];
  admin: boolean;
};

function 함수3({ user, comment, admin }: 함수3): void {
  console.log(user, comment, admin);
}

함수3({ user: "kim", comment: [3, 5, 4], admin: false });



// 숙제 3
function 함수4([...a] : (number|string|boolean)[]){ // 파라미터를 [a, b, c]로 해줘도 가능
  console.log(a);   // 여기도 a, b, c로 가능 & 위에 파라미터 설정해줄때는 대괄호 빼먹지 말기.. 
}

함수4([40, "wine", false]);