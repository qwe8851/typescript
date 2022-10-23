// 함수에 타입지정 & void 타입

// 함수 타입지정
function 함수(x:number) :number{
    return x*2
}

함수(2)


// 함수 타입지정 - void
function 함수2(x:number) :void{
    // return x*2
}
함수2() //에러 - 파라미터를 안넣어주었기 때문


// 함수 타입지정 - 파라미터 옵션 설정
function 함수3(x?:number) :void{
}
함수3()


// 퀴즈1
function 함수4(x : number|string) :void{
    if(x==='number')
    console.log(x+1)
}
함수4(2)

// 숙제 1
function exam1(x?:string) :void{
    if(x) console.log(`하이 +${x}`)
    else console.log(`입력안함`)
}


//숙제 2
function exam2(x: string|number) : number{
    return x.toString().length  //숫자는 length를 붙일 수 있음
}


// 숙제 3
function exam3(money: number, house:boolean, charm:string) :string|void{
    let score :number = 0;

    score += money;
    if(house == true) score += 500
    if(charm == '상') score+= 100

    if(score >= 600) return("결혼가능")
}
console.log(exam3(1000,true,'상'));