import {useContext} from "react";
import MemberContext from "../contexts/MemberContext.jsx";

function ProfilePage1(props){
    const member = useContext(MemberContext)
    return(
        <div className={`mt-3 p-3 border border-success rounded-2`}>
            <h4>부모 컴포넌트에서 props로 전달받은 데이터 : {props.theme}</h4>
            <h4>useContext()로 전달받은 데이터: {member} </h4>
        </div>
    )
}

export default ProfilePage1;