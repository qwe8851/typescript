// ts로 html변경&조작 시 주의할 점

let 제목 = document.querySelector('#title');

//Narrowing 방법 5가지
// 1. 타입을 하나로 확정
if(제목!=null) {
    제목.innerHTML = '반가워요'
}

// 2. instanceof 연산자
if(제목 instanceof Element){
    제목.innerHTML = '반가워요'
}

// 3. as assertion (추천 안 함)
let 제목2 = document.querySelector('#title') as Element; // Element타입으로 확정됨(비상용)
제목2.innerHTML = '반가워요'

// 4. 오브젝트에 붙이는 ?.   (optional chaining)
if(제목?.innerHTML){                // 1. 제목에 innerHTML이 있으면 출력해주고
    제목.innerHTML = '반가워요'     // 2. 없으면 undefined를 뱉음 
}

// 5. tsconfig.json에서 strict 없애기... (추천 안 함)
{
    "compilerOptions" : {
        "strictNullCheck" : false
    }
}





// 링크 변경
let 링크 = document.querySelector('.link');
if(링크 instanceof HTMLAnchorElement){      // HTMLAnchorElement, HTMLHeadingElement, HTMLButtonElement 등 여러 element타입이 있음
    링크.href = 'https://kakao.com';
}

// 버튼 변경
let 버튼 = document.querySelector('#button');
// if(버튼 instanceof HTMLButtonElement){
//     버튼.addEventListener('click',function(){
//         console.log('하이');
//     }
// }
버튼?.addEventListener('click', function(){
    console.log('하이');
})

// 숙제 1
let 이미지 = document.querySelector('#image');
if(이미지 instanceof HTMLImageElement){
    이미지.src = 'change.jpg';
}

// 숙제 2
let 링크2 = document.querySelectorAll('.naver'); // querySelectorAll로 써야 다 선택됨. querySelector로 쓰면 맨 위 하나만 선택

// forEach 사용
링크2.forEach((a)=>{
    if (a instanceof HTMLAnchorElement){
        a.href = 'https://kakao.com'
    }
})

// 일반 반복문 사용
for(let i=0; i<3; i++){
    let a = 링크2[i];   // 일반 for반복문을 쓸 경우 변수를 만들어줘야 매끄럽게 narrowing이 가능함
    if(a instanceof HTMLAnchorElement){
        a.href = 'https://kakako.com';
    }
}