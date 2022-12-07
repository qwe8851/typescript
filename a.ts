// exprot
export type 이름 = string;
export type 나이 = string;


// namespace
namespace nSpace {
  export type Name = string; // type export
}

// - name type을 object로 감싼것!
let 변수 : 네임스페이스.Name = 'kim';
// `namespace.type명`으로 사용 가능