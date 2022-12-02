// never type


function func() :never{
// 무언가 리턴하지 않을때 never type을 사용(void와 비슷하지만 더 엄격한 조건이 붙는다.)
}


// function return 값에 붙일 수 있는 never type
// 조건1. return값이 없어야 함
// 조건2. endpoint가 없어야 함


// 끝나지 않는 함수? endpoint가 없는 함수 생성하는 2가지 방법
// 1. error
function func2(): never {
  throw new Error();    //강제로 에러를 냄. 에러가 나면 코드 실행이 중단됨(함수가 끝나는거 X!)
}


function func3(): never{
  while(true){    // 조건식에 ture를 강제로 기입. 끝나지 않는 함수이므로 never타입을 가질 수 있음

  }
}





// void타입으로 대체할 수 있으므로 
never타입은 코드를 이상하게 짜면 등장함

// nevertype이 등장하는 경우 
// 1. 이상한 narrowing
function func4(params:string) {
  if(typeof params == 'string'){
    console.log(params)
  }else{    //fuction의 params를 받아올때 이미 타입검증을 함. (params가 string type일 때만 들어온다)
    console.log(params);    // 여기서 params의 값이 never이 됨. 
  }   //그래서 여기서 never은 있을 수 없다. 라는 뜻으로 쓰임. 
}

// 2. 어떤 함수 표현식은 return 타입이 자동으로 never
let 함수 = function () {
  throw new Error();
}
// 강제로 error를 반환하는 함수임
// 이런 경우 null도 undefined도 아무것도 남지 않음
// 이럴때 뭔가 이상하다고 알려주기위해 never타입이 됨. 

// 보통은 void타입을 씀

// Summary
// never타입은 그럴일이 없는 뭔가 이상하다는걸 알려주는 사인이라고 생각하면 되고 평소에는 void타입을 쓰면 되겠다!