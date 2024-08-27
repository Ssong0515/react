import JoinForm from "./JoinForm.jsx";
import {useState} from "react";

function Join(){
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    return(
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-sm-4 mx-auto border border-2 border-info rounded-4`}>
                    <h3 className={`text-center mt-3`}>회원가입</h3>
                    <JoinForm setId={setId} setPw={setPw} setEmail={setEmail} setName={setName}/>
                </div>
            </div>

            <div className={`row mt-3`}>
                <div className={`col-sm-4 mx-auto border border-2 border-secondary rounded-4 p-3 text-start`}>

                </div>
            </div>

        </div>
    )
}

export default Join