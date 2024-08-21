function MailBox(props){
    const unreadMessages = props.unreadMessages;

    return(
        <div>
            <h1>안녕하세요</h1>
            {
                // jsx 문법에서는 if문을 사용할 수 없음
                // 그래서 &&(논리고변산)이나 삼항연산자를 사용해야 함
                unreadMessages > 0 && <h2>현재 {unreadMessages} 개의 읽지 않은 메일이 있습니다.</h2>

            }
        </div>
    )
}

export default MailBox;