import {useState} from "react";
import Dialog2 from "./Dialog2.jsx";
import button from "bootstrap/js/src/button.js";
import Dialog3 from "./Dialog3.jsx";

function SignUpDialog(){
    const [nickName, setNickname] = useState('');

    const handleChange = e => {
        setNickname(e.target.value)
    }

    const handleSignUp = () => {
        alert(`어서 오세요, ${nickName}님!`)
    }

    return (
        <Dialog3
            title={"화성 탐사 프로그램"}
            message={"닉네임을 입력해 주세요."}
            color={'primary'}
        >
            <input
                value={nickName}
                onChange={handleChange}
            />
            <button onClick={handleSignUp}>
                가입하기
            </button>
        </Dialog3>
    )

}

export default SignUpDialog;