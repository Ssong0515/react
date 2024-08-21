// Truty: true(Boolean값 true), {} (빈 object 타입), [] (빈 배열),
    // 100, -200 (0이 아닌 숫자), "0", "false" (빈 문자열이 아닌 문자열)
// Falsy: false(Boolean 값 false), 0, -0, 0.0 (양수, 음수, 소수 상관없이 숫자 0)
    // 0n(BigInt 타입의 0), '', "", `` (빈 문자열),
    // null (데이터 없음), undefined (초기화 되지 않음), NaN(Not a Number, 숫자가 아님)

// let a;   변수 선언과 동시에 초기화하지 않았기 때문에 undefined 상태가 되어 falsy로 인식
// let b = [];  변수 선언과 동시에 배열 타입으로 선언했기 때문에 변수 b에 데이터가 저장 됨, truthy로 인식
// let c = {};  변수 선언과 동시에 객체 타입으로 선언했기 때문에 변수 b에 데이터가 저장 됨, truthy로 인식

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn == true) {
        return <UserGreeting/>;
    }

    return <GuestGreeting/>;
}

function UserGreeting() {
    return <h1>다시 오셨군요!</h1>
}

function GuestGreeting(){
    return <h1>회원가입을 해 주세요.</h1>
}

export default Greeting;