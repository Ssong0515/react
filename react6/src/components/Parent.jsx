import Child1 from "./Child1.jsx";
import {useState} from "react";
import Child2 from "./Child2.jsx";

function Parent() {

    const [data2, setData2] = useState('부모에서 state로 관리되는 데이터');

    const handler = (value) => {
        setData2(value)
    }

    return (
        <div className={`border rounded-2 p-3`}>
            <h2>부모 컴포넌트 영역</h2>
            <button type={'button'} className={`btn btn-primary`} onClick={() => handler('부모에게서 변경된 데이터')}>
                클릭 시 부모 데이터 변경
            </button>

            <h3>{data2}</h3>

            <div className={`row`}>
                <div className={`col-sm`}>
                    <Child1 data={'부모가 전달한 데이터'} data2={data2}/>
                </div>
                <div className={`col-sm`}>
                    <Child2 data={1000} data2={data2}/>
                </div>
            </div>
        </div>
    );
}

export default Parent;