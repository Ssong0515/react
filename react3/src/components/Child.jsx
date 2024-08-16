import {useState} from "react";

function Child (props){
    let data1 = props.data1;
    let data2 = props.data2;

    let [data3, setData3] = useState(300);
    let [data4, setData4] = useState(props.data2);

    const btn1Event = () => {
        console.log(`자식 컴포넌트 data1 : ${++data1}`);
    }

    const btn2Event = () => {
        console.log(`자식 컴포넌트 data2 : ${++data2}`);
    }

    const btn3Event = () => {
        props.data1 += props.data1;
        console.log(`자식 컴포넌트 props.data1 : ${props.data1}`);
    }

    const btn4Event = () => {
        props.data2 += props.data2;
        console.log(`자식 컴포넌트 props.data2 : ${props.data2}`);
    }

    const btn5Event = () => {
        setData3(++data3);
        console.log(`자식 컴포넌트 data3 : ${data3}`);
    }

    const btn6Event = () => {
        setData4((++data4));
        console.log(`자식 컴포넌트 data4 : ${data4}`);
    }

    const btn7Event = () => {
        setData4(++data4)
        props.change();
    }

    return(
        <div className={'border border-2 border-primary rounded-2 p-3'}>
            <h3>자식 컴포넌트</h3>

            <h4>data1 : {data1}, data2 : {data2}</h4>
            <h4>props.data1 : {props.data1}, props.data2 : {props.data2}</h4>
            <h4>data3 : {data3}, data4 : {data4}</h4>
            <hr/>

            <button type={'button'} className={'btn btn-info me-2'} onClick={btn1Event}>props.data1의 값을 받은 data1 수정</button>
            <button type={'button'} className={'btn btn-info'} onClick={btn2Event}>props.data2의 값을 받은 data2 수정</button>
            <button type={'button'} className={'btn btn-success me-2'} onClick={btn3Event}>자식 컴포넌트가 props.data1 직접 수정</button>
            <button type={'button'} className={'btn btn-success'} onClick={btn4Event}>자식 컴포넌트가 props.data2 직접 수정</button>
            <button type={'button'} className={'btn btn-primary me-2'} onClick={btn5Event}>자식 컴포넌트가 state 값 수정</button>
            <button type={'button'} className={'btn btn-primary'} onClick={btn6Event}>props.data2의 값을 자식 컴포넌트의 state로 받고 setState로 수정</button>
            <button type={'button'} className={'btn btn-warning'} onClick={btn7Event}>부모까지 업데이트</button>

        </div>
    );
}

export default Child;