function Child3(props){
    let childValue = 1000;

    const sendData = () => {
        props.setData2(2000);
    }

    return(
        <div>
            <h3>자식 컴포넌트</h3>

            <h4>부모 컴포넌트가 전달한 데이터1 : {props.data1} </h4>
            <h4>자식 컴포넌트가 가지고 있는 데이터 : {childValue}</h4>
            <button type={`button`} className={`btn btn-primary`} onClick={sendData}>
                부모 컴포넌트로 데이터 전달
            </button>
        </div>
    );
}

export default Child3;