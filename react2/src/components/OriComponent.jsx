function formatDate(date){
    return date.toLocaleDateString();
}

function OriComponent(props){
    return (
        <div className={'comment'}>
            <div className={'mt-3'}>
                <img className={'img-thumbnail'} src={props.author.avatarUrl} alt={props.author.name} style={{width: 100, height: 100}}/>
                <img className={'img-thumbnail'} src={props.author.avatarUrl2} alt={props.author.name} style={{width: 100, height: 100}}/>
                <div className={'mt-2 px-3 fs-3'}>{props.author.name}</div>
            </div>
            <div className={'mt-3 px-3 fs-3'}>{props.text}</div>
            <div className={'mt-3 px-3 fs-3'}>{formatDate(props.date)}</div>
        </div>
    );
}

export default OriComponent;