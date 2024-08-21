import {useState} from "react";

function Event1() {
    const [isToggleOn, setIsToggleOn] = useState(false);

    function handleClick() {
        setIsToggleOn(isToggleOn => !isToggleOn);
    }

    const handleDelete = (id, event) => {
        alert(`id: ${id}, content: ${event.target.textContent}`);
    }
    return (
        <div>
            <button type={`button`} className={`btn btn-primary`} onClick={handleClick}>
                {isToggleOn ? `켜짐` : `꺼짐`}
            </button>
            <button type={`button`} className={`btn btn-primary`} onClick={() => {
                setIsToggleOn(isToggleOn => !isToggleOn)
            }}>
                {isToggleOn ? '켜짐' : `꺼짐`}
            </button>
            <br/><br/>
            <button type={`button`} className={`btn btn-primary`} onClick={(event) => {
                handleDelete(1, event);
            }}>
                매개변수가 있는 버튼 이벤트
            </button>
        </div>
        
    );
}

export default Event1;