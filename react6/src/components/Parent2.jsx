import {useState} from "react";
import Child3 from "./Child3.jsx";

function Parent2(){

    let parentValue1 = 100;
    const [parentValue2, setParentValue2] = useState(200);

    return(
        <div className={`border border-2 border-primary p-2`}>
            <h3>부모 컴포넌트 2</h3>
            <h4>부모 컴포넌트가 가지고 있는 데이터 1 : {parentValue1}</h4>
            <h4>부모 컴포넌트가 가지고 있는 데이터 2 : {parentValue2}</h4>
            <br/>
            <Child3 data1={parentValue1} setData2={setParentValue2} />
        </div>
    );
}

export default Parent2;