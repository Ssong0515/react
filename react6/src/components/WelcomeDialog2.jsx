import Dialog2 from "./Dialog2.jsx";

function WelcomeDialog2(){
    return (
        <div>
            <Dialog2 title={`어서 오세요`} message={'환영합니다'}/>
            <Dialog2 title={`경고!!`} message={'오류가 발생했습니다.'}/>
        </div>
    );
}

export default WelcomeDialog2;