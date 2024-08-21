import {useState} from "react";

function Join(){
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState(true);

    const handlerChangeId = e => setId(e.target.value);
    const handlerChangePw = e => setPw(e.target.value);
    const handlerChangeName = e => setName(e.target.value);
    const handlerChangeEmail = e => setEmail(e.target.value);
    const handlerChangePhone = e => setPhone(e.target.value);
    const handlerChangeGender = e => setGender(e.target.value);

    const handlerSubmit = e => {
        const result = `아이디: ${id}, 패스워드: ${pw}, 이름: ${name}, 이메일: ${email}, 휴대전화: ${phone}, 성별: ${gender ? '남자' : '여자'}`
        console.log(result);
        alert(result);
        e.preventDefault();
    }

    return(
        <div className={`row`}>
            <div className={`col-sm-6 mx-auto`}>
                <form onSubmit={handlerSubmit}>
                    <label htmlFor="id" className={`form-label`}>
                        ID:
                        <input type="text" className={`form-control`} id={`id`} value={id} onChange={handlerChangeId}/>
                    </label>
                    <label htmlFor="pw" className={`form-label`}>
                        PW:
                        <input type="text" className={`form-control`} id={`pw`} value={pw} onChange={handlerChangePw}/>
                    </label>
                    <label htmlFor="name" className={`form-label`}>
                        Name:
                        <input type="text" className={`form-control`} id={`name`} value={name} onChange={handlerChangeName}/>
                    </label>
                    <label htmlFor="email" className={`form-label`}>
                        Email:
                        <input type="email" className={`form-control`} id={`email`} value={email} onChange={handlerChangeEmail}/>
                    </label>
                    <label htmlFor="phone" className={`form-label`}>
                        Phone:
                        <input type="text" className={`form-control`} id={`phone`} value={phone} onChange={handlerChangePhone}/>
                    </label>
                    <br/>
                    <label htmlFor="gender" className={`form-label`}>
                        남자:
                        <input type="checkbox" className={`form-check-input`} checked={gender} id={`gender`}
                               onChange={handlerChangeGender}/>
                    </label>
                    <label htmlFor="gender" className={`form-label`}>
                        여자:
                        <input type="checkbox" className={`form-check-input`} checked={!gender} id={`gender`}
                               onChange={handlerChangeGender}/>
                    </label>


                    <div className={`mt-3 d-grid gap-2`}>
                        <button type={`submit`} className={`btn btn-primary`}>확인</button>
                        <button type={`reset`} className={`btn btn-primary`} onClick={e => {
                            setId('');
                            setPw('');
                            setName('');
                            setEmail('');
                            setPhone('');
                            setGender(true);
                        }}>취소
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Join;