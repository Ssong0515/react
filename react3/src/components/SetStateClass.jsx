import React from "react";

// React.Component를 상속받아 클래스 컴포넌트로 생성
class SetStateClass extends React.Component {

    // 자바스크립트 ES6 문법에서 제공하는 자바스크립트 클래스의 생성자
    // 자바스크립트 클래스의 생성자는 이름이 constructor로 고정
    // 생성자는 단 1개만 존재
    constructor(props) {
        // 자바의 super와 동일한 역할
        super(props);

        // 자바스크립트는 this.변수명 사용 시, 클래스의 필드(클래스의 멤버변수)로 사용
        // 클래스 컴포넌트 SetStateClass의 멤버 변수 state를 선언, 데이터 타입은 object 타입
        // 리액트에서 클래스 컴포넌트를 사용 시, 현재 컴포넌트의 상태정보를 저장하는 state 객체를 선언
        this.state = {
            // 컴포넌트의 상태 정보를 저장할 변수 StateString 선언
            // 리액트의 state는 현재 컴포넌트의 상태 정보를 저장하고 있지만, 해당 정보를 직접 수정 시 화면에 반영하지 않음
            // UI 화면에 반영하면서 수정하려면 setState() 함수를 반드시 사용해야 함
            StateString: 'Click',
        }
    }

    // SetStateClass 클래스의 멤버 메소드 StateChange 선언
    StateChange = flag => {
        if (flag == 'direct') {
            // 컴포넌트의 상태 정보를 저장하는 state의 요소 중 StateString의 값을 = 연산자를 사용하여 직접 변경
            // 리액트에서는 Virtual DOM을 사용하기 때문에 state의 값을 직접 수정 시, Virtual DOM에만 적용되고, 실제 DOM에는 적용되지 않음
            console.log(`원본 내용 : ${this.state.StateString}`)
            this.state.StateString = `멤버 변수인 StateString의 값을 직접 변경`;
            console.log(`수정 내용 : ${this.state.StateString}`);
        } else if (flag == 'setState') {
            // setState() 함수를 사용하여 StateString의 값을 변경
            // setState() 함수를 사용하여 StateString의 값을 변경하면, Virtual DOM에 적용되고, 실제 DOM에도 적용됨
            console.log(`원본 내용 : ${this.state.StateString}`)
            this.setState({StateString: `setState() 함수로 멤버 변수인 StateString의 값 변경`});
            console.log(`수정 내용 : ${this.state.StateString}`);
        }
    }

    render() {
        return (
            <div>
                <button type={"button"} className={'btn btn-primary me-2'} onClick={(e) => {
                    this.StateChange('direct', e)
                }}>state 직접 수정</button>
                <button type={'button'} style={{marginLeft: 10}} className={'btn btn-success'} onClick={(e) => {
                    this.StateChange('setState', e)
                }}>setState로 변경</button>
                <br/>
                [state 변경하기] StateString: {this.state.StateString}
            </div>
        )
    }
}

export default SetStateClass;