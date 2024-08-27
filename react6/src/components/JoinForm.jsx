import {useState} from "react";

function JoinForm(props){

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');

    const changeUserId = e => setUserId(e.target.value);
    const changeUserPw = e => setUserPw(e.target.value);
    const changeUserEmail = e => setUserEmail(e.target.value);
    const changeUserName = e => setUserName(e.target.value);

    const submitClick = e => {

        alert(
        `ID: ${userId}
        PW: ${userPw}
        Email: ${userEmail}
        Name: ${userName}`
        )

        props.setId(userId)
        props.setPw(userPw)
        props.setEmail(userEmail)
        props.setName(userName)

        e.preventDefault();
    }

    const resetClick = () => {
        setUserId('');
        setUserPw('')
        setUserEmail('')
        setUserName('')
    }

    return(
        <form onSubmit={submitClick}>
            <div className={`mt-3`}>
                <label htmlFor="user-id" className={`form-label`}>User ID : </label>
                <input type="text" className={`form-control`} id={`user-id`} value={userId} onChange={changeUserId}/>
            </div>
            <div className={`mt-3`}>
                <label htmlFor="user-pw" className={`form-label`}>User PW : </label>
                <input type="text" className={`form-control`} id={`user-pw`} value={userPw} onChange={changeUserPw}/>
            </div>
            <div className={`mt-3`}>
                <label htmlFor="user-email" className={`form-label`}>User Email : </label>
                <input type="email" className={`form-control`} id={`user-email`} value={userEmail} onChange={changeUserEmail}/>
            </div>
            <div className={`mt-3`}>
                <label htmlFor="user-name" className={`form-label`}>User Name : </label>
                <input type="text" className={`form-control`} id={`user-name`} value={userName} onChange={changeUserName}/>
            </div>
            <div className={`mt-3 d-grid gap-2`}>
                <button type={`submit`} className={`btn btn-primary`}>확인</button>
                <button type={`reset`} className={`btn btn-secondary`} onClick={resetClick}>취소</button>
            </div>
        </form>
    )
}

export default JoinForm