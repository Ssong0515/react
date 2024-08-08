import './App.css'
import Library from "./Library.jsx";
import Clock from "./Clock.jsx";

// 클래스 컴포넌트 : UI를 구성하는 방식을 자바스크립트의 클래스로 이루어진 컴포넌트, 
    // 예전에는 클래스 컴포는트를 주로 사용하였음 
    // 이유는 컴포넌트의 생명주기 함수를 사용하기 위해서 클래스 컴포넌트를 사용했음

// 함수 컴포넌트 : UI를 구성하는 방식을 자바스크립트의 함수로 이루어진 컴포넌트,
    // 예전에는 함수 컴포넌트는 기능 제약이 있었기 때문에 주로 클래스 컴포넌트를 사용함,
    // Hooks 라는 기능이 추가되면서 함수 컴포넌트로 컴포넌트의 생명주기 함수를 모두 사용할 수 있게 됨

// 컴포넌트 : 리액트에서 UI를 구성하는 단위, 재사용이 가능한 UI 조각
// 컴포넌트의 이름은 첫글자를 대문자로 사용하는 것이 관례임
// 화면을 그리기 위한 컴포넌트는 export default로 지정해야 함

// 함수 컴포넌트 선언
// 자바스크립트의 함수 선언과 동일함(화살표 함수도 사용 가능)

function Tick(){
    return (
        <div>
            <h1>안녕</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

setInterval(Tick, 1000);

function App() {
  return (
      // 아래의 소스코드가 모두 JSX 문법임
      // JSX의 기본 모습은 html 태그와 유사함
      // JSX의 html 태그의 속성이 진짜 html 태그의 속성이 일부 다른 것이 존재함
    <div>
      {/*<Library/>*/}
      {/*  <Tick />*/}
        <Clock/>
    </div>

  )
}

// default export를 통해서 외부에서 사용할 수 있도록 제공
export default App
