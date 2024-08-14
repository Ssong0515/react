import UserInfo from "./UserInfo.jsx";

function formatDate(date){
    return date.toLocaleDateString();
}

function DivComponent(props){
    return (
        <div className={'mt-4'}>
            {/* 컴포넌트 추출 */}
            {/* UI 구성이 복잡한 컴포넌트를 컴포넌트 추출을 통해서 간소화된 형태의 컴포넌트로 UI 구성 가능*/}
            {/* 기능 단위, 재사용이 가능한 형태로 추출하는 것이 좋음 */}

            {/* 원본 컴포넌트 내용 */}
            {/*<div className={'mt-3'}>*/}
            {/*    <img className={'img-thumbnail w-100'} src={props.author.avatarUrl} alt={props.author.name}/>*/}
            {/*    <div className={'mt-2 px-3 fs-3'}>{props.author.name}</div>*/}
            {/*</div>*/}

            {/* 대체된 새로운 컴포넌트 */}
            <UserInfo userData={props.author}/>

            <div className={'mt-3 px-3 fs-3'}>{props.text}</div>
            <div className={'mt-3 px-3 fs-3'}>{formatDate(props.date)}</div>
        </div>
    );
}

export default DivComponent;