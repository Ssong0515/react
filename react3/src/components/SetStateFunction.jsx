import {useState} from "react";

// 함수 컴포넌트로 컴포넌트 생성
function SetStateFunction() {

    // 리액트의 hooks 중 하나인 useState() 함수를 사용하여 컴포넌트의 state를 수정하도록 설정
    // = 연산자 왼쪽의 첫번째 요소인 stateString이 컴포넌트의 상태를 관리하는 state 변수
    // = 연산자 왼쪽의 두번재 요소인 setStateString이 컴포넌트의 state가 가지고 있는 값을 변경하는 함수가 됨
    // state 변경 함수의 이름은 'set + 변수명' 형태로 사용, 카멜명명법을 사용
    // useState(초기값) : 리액트의 최신 기능인 hooks의 기능 중 하나, state 객체를 관리하는 역할
    // 초기값을 설정하지 않으면 null이 초기값으로 설정 됨
    // set함수명() 형식으로 state의 값을 변경 시, UI 업데이트가 발생 됨
    // 사용법 :
        // let [변수명, set함수명] = useState(초기값);
        // set함수명(수정할 값); // 지정한 state의 값을 변경
    let [stateString, setStateString] = useState('Click');

    const stateChange = e => {
        console.log(`원본 내용 : ${stateString}`);
        // 컴포넌트에서 state로 관리하고 있는 stateString 변수의 값을 직접 변경
        // 변경된 내용이 Virtual DOM에만 적용되고, UI에는 적용 되지 않음
        stateString = 'useState로 수정 클릭';
        console.log(`수정 내용 : ${stateString}`);
        // 현재 이벤트 중지
        e.preventDefault();
    }

    return (
        <div>
            <button type={'button'} className={'btn btn-primary'} style={{marginRight: 16}} onClick={(e) => {
                stateChange(e);
            }}>state 직접 수정</button>
            <button type={`button`} className={`btn btn-success`} onClick={() => {
                // 리액트의 hooks 에서 제공하는 useState() 함수를 사용하여 state가 관리하는 데이터를 수정할 수 있는 함수 setStateString() 호출
                // setStateString()은 state가 관리하는 변수 stateString의 값을 수정하고, 리액트의 생명주기 함수 중 compoenetDidUpdate() 함수를 호출하여 UI 업데이트
                // componentDidUpdate() 함수가 호출되면 Virtual DOM의 내용이 실제 DOM의 내용에 반영
                setStateString('클릭');
            }}>setState로 수정</button>
            <br/>
            [함수 컴포넌트에서 state 변경하기] stateString : {stateString}
        </div>
    )
}

export default SetStateFunction;