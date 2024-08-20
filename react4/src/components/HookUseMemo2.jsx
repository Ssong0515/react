import {useEffect, useMemo, useState} from "react";

function HookUseMemo2(){

    const [number, setNumber] = useState(0);
    const [isType, setIsType] = useState(true);

    // setState() 가 동작하여 UI 화면을 새로 그릴 때, isType의 값을 확인하여 object 타입의 변수 food의 데이터를 연산하여 가져옴
    // useEffect 의 의존성 배열에 변수 food를 등록하였기 때문에 화면이 업데이트 할 때마다 useEffect가 호출됨

    const food = useMemo(() => {
        return {type: isType ? `부먹` : `찍먹`};
    }, [isType]);

    // useEffect의 두번째 매개변수인 의존성 배열에 등록된 변수의 데이터가 변경되면 useEffect 함수가 호출됨
    useEffect(() => {
        console.log(`component did mount`)
    }, [food]);
    
    return(
        <div>
            <h3>숫자 카운트</h3>
            <input type="number" className={`form-control`} value={number} onChange={(e) => {
                setNumber(e.target.value);
            }}/>

            <br/>

            <h3>boolean 값 변경</h3>
            <p>부먹 vs 찍먹 : <span className={`fs-3`}>{food.type}</span></p>
            <button type={`button`} className={`btn btn-primary`} onClick={() => {
                setIsType(!isType);
            }}>클릭</button>

        </div>
    );
}

export default HookUseMemo2;