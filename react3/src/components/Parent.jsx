import {useState} from "react";
import Child from "./Child.jsx"

let data1 = 100;
function Parent(){
    let [data2, setData2] = useState(200);

    const firstDataChange = () => {
        console.log(`부모 컴포넌트 data1 : ${++data1}`);
    }

    const secondDataChange = () => {
        setData2(++data2)
        console.log(`부모 컴포넌트 data2 : ${data2}`);
    }

    return(
        <div className={`border border-2 rounded-3 p-3`}>
            <h3>부모 컴포넌트</h3>

            <button type={"button"} className={`btn btn-primary me-2`} onClick={firstDataChange}>부모 첫번째 데이터 수정</button>
            <button type={"button"} className={`btn btn-primary`} onClick={secondDataChange}>부모 두번째 데이터 수정</button>

            <h4 className={`my-3`}>
                <span>data1 : {data1}, date2 : {data2}</span>
            </h4>
            <hr/>

            <Child data1={data1} data2={data2} change={secondDataChange}/>
        </div>
    );
}

export default Parent