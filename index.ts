// 타입확정하기 Narrowing & Assertion

// Narrowing - 타입이 아직 하나로 확정되지 않았을경우
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모
function 함수 (x:number|string){
    if(typeof x === 'string') return x+'string type'
    if(typeof x === 'number') return x+'number type'
    else return 0; // else를 안넣으면 에러를 내주는데 이게 싫으면 tsconfig.json에 "noImplicitReturns" : false를 추가하면 됨
}

function 함수2 (x:number|string){
    let arr :number[] = [];

    if(typeof x === 'number') arr[0] = x
    
}


// Assertion
// 1. narrowing할 대 사용 (union타입 중 하나로 확정할 때 )
// 2. 무슨 타입이 들어올지 100%확실할 때
// 걍 안쓰는게 좋음
function 함수3 (x:number|string){
    let arr :number[] = [];

    arr[0] = x as number; // 타입덮어쓰기
}

type Person ={
    name : string
}

function 변환기<T>(data:string):T{
    return JSON.parse(data) as T;
} 
const jake = 변환기<Person>('{"name" : "kim"}');





// 숙제 1 - 클리닝 함수
 function 클리닝함수 (a:(string |number)[]){
    let 클리닝완료 : number[] = [];

    a.forEach((b) => {
        if(typeof b === 'string') 클리닝완료.push(parseFloat(b))
        else 클리닝완료.push(b)
    });
    
    return 클리닝완료
 }
// console.log(클리닝함수([123,'3']))



// 숙제 2 - 함수만들기
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function arr검사 (a : {subject : string | string[]} ){
    if(Array.isArray(a.subject)) 
        return a.subject[a.subject.length -1]
    else if (typeof a.subject == 'string')
        return a.subject
    else return '없쪄'
}

console.log(arr검사(민수쌤))