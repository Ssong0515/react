import React from "react";

const ThemeContext = React.createContext(`primary`);

function App2() {
    return (
        <div className={`container mt-5`}>
            <ThemeContext.Provider value={`info`}>
                <Toolbar2/>
            </ThemeContext.Provider>
        </div>
    );
}

function Toolbar2() {
    return <ThemeButton2/>
}

function ThemeButton2() {
    return (
        <ThemeContext.Consumer>
            {value => <Button2 theme={value}/>}
        </ThemeContext.Consumer>
    )
}

function Button2(props) {
    const clickButton = () => alert(`사용한 부트스트랩 테마 : ${props.theme}`);
    ThemeContext.displayName = `테마컨텍스트`
    return <button type={`button`} className={`btn btn-${props.theme}`} onClick={clickButton}>
        {props.theme} 테마 버튼
    </button>
}

export default App2;