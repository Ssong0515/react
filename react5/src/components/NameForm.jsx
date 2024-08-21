import {useState} from "react";

// 리액트에서는 사용자의 데이터 입력을 받는 Form 태그 부분을 모두 state로 관리하고 있음
// 변경되는 데이터를 사용자가 실시간으로 입력하면서
function NameForm() {
    const [value, setValue] = useState('');

    const handleChange = e => setValue(e.target.value);

    let email = '';

    const handleEmailChange = e => {
        email = e.target.value;
    };

    const handleSubmit = e => {
        alert(`입력한 이름 : ${value} \n이메일 : ${email}`);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={`mt-3`}>
                    <label htmlFor="user-name" className={`form-label`}>이름 : </label>
                    {/* input 태그의 value 속성에 state로 관리 되고 있는 변수 value를 사용 */}
                    <input type="text" className={`form-control`} id={`user-name`} value={value}
                           onChange={handleChange}/>
                </div>
                <div className={`mt-3`}>
                    <label htmlFor="user-email" className={`form-label`}>이메일</label>
                    {/* input 태그의 value 속성에 일반 변수 email을 사용 */}
                    <input type="email" className={`form-control`} id={`user-email`} value={email} onChange={handleEmailChange}/>
                </div>
                <div className={`mt-3`}>
                <button type={`submit`} className={`btn btn-primary`}>제출</button>
                </div>
            </form>
        </div>
    )
}

export default NameForm;