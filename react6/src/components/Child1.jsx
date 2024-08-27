function Child1(props){
    return(
        <div className={`rounded-2 border border-3 border-primary mt-3 p-3`}>
            <h2>왼쪽 자식 컴포넌트</h2>
            <h3>첫번째로 전달받은 값 : {props.data}</h3>
            <h3 className={`border border-2 border-danger p-2`}>두번재로 전달받은 값: {props.data2}</h3>
        </div>
    );
}

export default Child1;