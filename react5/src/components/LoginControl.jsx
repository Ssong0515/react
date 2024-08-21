import {useState} from "react";
import Greeting from "./Greeting.jsx";

function LoginButton(props){
    return(
        <button type={`button`} className={`btn btn-primary`} onClick={props.onClick}>
            로그인
        </button>
    )
}
function LogoutButton(props){
    return(
        <button type={`button`} className={`btn btn-warning`} onClick={props.onClick}>
            로그아웃
        </button>
    )
}

function LoginControl(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;

    if (isLoggedIn == true) {
        button = <LogoutButton onClick={handleLogoutClick} />
    } else{
        button = <LoginButton onClick={handleLoginClick} />
    }

    // 엘리먼트 변수 사용 시
    return (
        <div className={`mt-4`}>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
    )
    
    // 엘리먼트 변수 미사용 시
    if (isLoggedIn == true) {
        return (
            <div className={`mt-4`}>
                <Greeting isLoggedIn={isLoggedIn}/>
                <LogoutButton onClick={handleLogoutClick}/>
            </div>
        )
    } else {
        return (
            <div className={`mt-4`}>
                <Greeting isLoggedIn={isLoggedIn}/>
                <LoginButton onClick={handleLoginClick}/>
            </div>
        )
    }

}

export default LoginControl;