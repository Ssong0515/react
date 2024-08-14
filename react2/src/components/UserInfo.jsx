function UserInfo(props){
    return (
        <div className={'mt-3'}>
            <img className={'img-thumbnail'} src={props.userData.avatarUrl2} alt={props.userData.name} style={{width: 100, height: 100}}/>
            <div className={'mt-2 px-3 fs-3'}>{props.userData.name}</div>
        </div>
    );
}

export default UserInfo;