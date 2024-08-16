import {useState} from "react";

// react hooks: 리액트의 state 와 생명주기 기능에 갈고리를 걸어서 원하는 시점에 정해진 함수를 실행하도록 만든 것
// userState(): state 상태 관리를 쉽게하기 위해서 사용
// userEffect(): 생명주기 함수를 쉽게 사용하기 위해서 사용
// useNavigate(): React Router를 사용하여 MPA 방식 웹을 만드는 것처럼 하기 위해서 사용
// useMemo(): 기존에 수행된 결과값을 저장해두고, 동일한 입력이 들어왔을 경우 해당 데이터를 재활용하여 로딩 속도를 높임
// useCallback(): useMemo()와 동일한 기능이지만 useMemo()는 결과값을 재활용 useCallback()은 함수를 재활용 함
// useRef(): 특정 컴포넌트에 접근할 수 있도록 해줌
const CounterUseState = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>총 {count}번 클릭 했습니다.</p>
            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                setCount(count + 1)
                console.log(`userState() count : ${count + 1}`);
            }}>클릭</button>
        </div>
    )
}

export default CounterUseState;