import {useState} from "react";

function RequestForm(){
    const [value, setValue] = useState('');

    const handleChange = e => setValue(e.target.value);

    const handleSubmit = e => {
        alert('입력한 요청사항: ' + value);
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className={`mt-3`}>
                    <label htmlFor="comments" className={`form-label`}>요청사항 :
                    {/* 기본 html 태그의 textarea는 value 속성이 없기 때문에 태그 사이에 값을 넣어야 하지만 JSX의 textarea는 value 속성을 가지고 있음 */}
                    <textarea className={`form-control`} id="comments" rows="5" value={value} onChange={handleChange} placeholder={'요청사항을 입력하세요'}></textarea>
                    </label>
                </div>
                <div className={`mt-3 d-grid gap-2`}>
                    <button type={`submit`} className={`btn btn-primary`}>확인</button>
                    <button type={`reset`} className={`btn btn-secondary`} onClick={() => setValue('')}>취소</button>
                </div>
            </form>
        </div>
    )
}

export default RequestForm;