import {useState} from "react";

function Info(){

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    return(
        <div className={''}>
            <div className={'d-grid gap-2 mb-2'}>
                <input className={`form-control`} value={name} onChange={onChangeName}/>
                <input className={`form-control`} value={nickname} onChange={onChangeNickname}/>
            </div>
            <div className={`d-grid gap-2`}>
                <div><strong>이름: </strong>{name}</div>
                <div><strong>닉네임: </strong>{nickname}</div>
            </div>
        </div>
    );
}

export default Info;