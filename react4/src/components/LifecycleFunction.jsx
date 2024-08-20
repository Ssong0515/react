import {useEffect, useState} from "react";

function LifecycleFunction(){

    let num1;
    const [num2, setNum2] = useState();

    useEffect(() => {
        num1 = 100;
        setNum2(2000);
        console.log(`did mount`);
        console.log(`num1 : ${num1}, num2 : ${num2}`);
    }, []);

    useEffect(() => {
        console.log(`did updated`)
    }, [num2]);

    return(
        <div>
            <button type={`button`} className={`btn btn-primary`} onClick={() => {
                setNum2(num2 + 1);
                console.log(num2);
            }}>화면 업데이트</button>
            <p>num1 : {num1}</p>
            {console.log(num1)}
            <p>num2 : {num2}</p>
            {console.log(num2)}
        </div>
    );
}

export default LifecycleFunction;