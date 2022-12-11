# typescript

## typescript 설치 및 세팅
1. `npm install -g typescript`
2. .ts로 끝나는 파일 생성
3. tsconfig.json 생성, 아래 코드 넣기
```json
{
    "compilerOptions": {
        "target": "ES3",
        "module": "commonjs"
    }
}
```
4. 컴파일 과정 필요 `tsc -w`<br>
브라우저는 js파일만 읽을 수 있어서 ts파일을 js파일로 변환시켜주어야 함
<br><br><br><br><br>

##  React + TS 설치
1. 새로생성 <br>
`npx create-react-app 프로젝트명 --template typescript`
<br><br>
2. 기존 프로젝트에 ts추가 설치<br>
`npm install --save typescript @types/node @types/react @types/react-dom @types/jest`<br><br>