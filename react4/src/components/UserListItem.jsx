import {useEffect, useState} from "react";
import useUserStatus from "./useUserStatus.jsx";

// 사용자 목록에서 온라인인 회원은 회원명을 녹생으로 표현하고 오프라인이면 검정색으로 표현하는 컴포넌트(지정한 회원의 상태 확인)
function UserListItem(props) {

    const isOnline = useUserStatus(props.user.id)

    // const [isOnline, setIsOnline] = useState(null);
    //
    // useEffect(() => {
    //     function handleStatusChange(status) {
    //         setIsOnline(status.isOnline);
    //     }
    //
    //     ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    //
    //     return () => {
    //         ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
    //     };
    // });

    return (
        <li style={{ color: isOnline ? `green` : `black`}}>
            {props.user.name}
        </li>
    )

}