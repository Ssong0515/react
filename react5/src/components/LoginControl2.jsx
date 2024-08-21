import {useState} from "react";
import Greeting from "./Greeting.jsx";

function LoginButton(props) {
    return <button type={`button`} className={`btn btn-primary`} onClick={props.onClick}>
        로그인
    </button>
}

const LogoutButton = (props) => <button type={`button`} className={`btn btn-primary`} onClick={props.onClick}>
        로그아웃
    </button>


function LoginControl2() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => setIsLoggedIn(true);
    const handleLogoutClick = () => setIsLoggedIn(false);

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {
                isLoggedIn
                    ? <LogoutButton onClick={handleLogoutClick}/>
                    : <LoginButton onClick={handleLoginClick}/>
            }
        </div>
    )
}

export default LoginControl2;