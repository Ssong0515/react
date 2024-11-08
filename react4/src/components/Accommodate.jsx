import {useEffect, useState} from "react";
import useCounter from "./useCounter.jsx";

const MAX_CAPACITY = 10;

function Accommodate() {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("=================");
        console.log("useEffect() is called");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return(
        <div>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button type={`button`} className={`btn btn-primary`} onClick={increaseCount} disabled={isFull}>입장</button>
            <button type={`button`} className={`btn btn-warning`} onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color: `red`}}>정원이 가득찼습니다.</p> }
        </div>
    )
}

export default Accommodate;