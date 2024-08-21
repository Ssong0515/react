import {useState} from "react";

function WarningBanner(props){
    if (!props.warning) {
        return null;
    }
    return (
        <div className={`text-danger`}>경고!</div>
    );
}

function MainPage(){
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
    }

    return(
        <div>
            <WarningBanner warning={showWarning}/>
            <button type={`button`} className={`btn btn-primary`} onClick={handleToggleClick}>
                {showWarning ? `감추기` : `보이기`}
            </button>
        </div>
    )
}

export default MainPage;