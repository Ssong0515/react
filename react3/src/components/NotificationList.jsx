import React from "react";
import Notification from "./Notification.jsx";

const reservedNotification = [
    { message: '안녕하세요. 메시지 테스트 입니다.', key: 1 },
    { message: '안녕하세요. 두번째 메시지 테스트 입니다.', key: 2 },
    { message: '세번째 메시지 테스트 입니다.', key: 3 },
    { message: '네번째 메시지 테스트 입니다.', key: 4 },
    { message: '안녕하세요. 메시지 테스트 5 입니다.', key: 5 },
    { message: '안녕하세요. 메시지 테스트 6 입니다.', key: 6 },
];

let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    // 현재 컴포넌트의 UI 화면을 구성(render()) 후 부모 컴포넌트에 붙히고 난 후 동작하는 메서드
    componentDidMount() {
        // state로 관리되고 있는 객체를 componentDidMount 메서드의 지역변수로 선언
        // 객체 분해 할당 방식으로 state 객체의 요소를 지역 변수인 notifications에 대입
        const {notifications} = this.state;

        timer = setInterval(() => {
            if (notifications.length < reservedNotification.length) {
                const index = notifications.length;
                notifications.push(reservedNotification[index]);
                this.setState({notifications: notifications})
            } else {
                clearInterval(timer);
            }
        }, 2000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map(item => {
                    return <Notification message={item.message} key={item.key} />
                })}
            </div>
        )
    }
}

export default NotificationList;