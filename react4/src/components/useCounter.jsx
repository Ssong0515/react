import {useState} from "react";

// 커스텀 훅
function UseCounter(initValue) {
    const [count, setCount] = useState(initValue);
    const incrementCount = () => setCount(count + 1)
    const decrementCount = () => setCount(Math.max(count - 1, 0));
    return [count, incrementCount, decrementCount];
}

export default UseCounter;