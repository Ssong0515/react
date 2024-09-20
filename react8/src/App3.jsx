import React from "react";

const ThemeContext = React.createContext(`light`);
ThemeContext.displayName = `테마 컨텍스트`;
const MemberContext = React.createContext(`Guest`)
MemberContext.displayName = `사용자 컨텍스트`;

function App3(){

    const theme = `dark`;
    const signedInUser = `아이유`;

    return(
        <div className={`container mt-5`}>
            <ThemeContext.Provider value={theme}>
                <MemberContext.Provider value={signedInUser}>
                    <Toolbar3/>
                </MemberContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
}

function Toolbar3(){
    return <ThemeButton3 />
}

function ThemeButton3(){
    return(
        <ThemeContext.Consumer>
            {theme => (
                <MemberContext.Consumer>
                    {member => (
                        <Button3 theme={theme} username={member}/>
                    )}
                </MemberContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

function Button3(props){

    const {theme, username} = props;
    const clickButton = () => alert(`전달받은 데이터 : ${theme}, ${username}`)

    return(
        <div className={`p-3 mt-3`}>
            <button type={`button`} className={`btn btn-${theme}`} onClick={clickButton}>
                {theme} 테마 버튼
            </button>
            <input type="text" className={`form-control`} value={username}/>
        </div>
    );
}

export default App3;