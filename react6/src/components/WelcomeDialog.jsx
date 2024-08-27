import FancyBorder from "./FancyBorder.jsx";

function WelcomeDialog(){
    return(
        <div className={`border border-2 border-primary p-3`}>
            <h3>부모 컴포넌트 영역</h3>
            <FancyBorder color={`blud`}>
                <h1 className={`Dialog-title`}>어서오세요</h1>
                <p className={`Dialog-message`}>환영합니다</p>
            </FancyBorder>
        </div>
    )
}

export default WelcomeDialog