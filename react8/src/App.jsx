function App() {

  return (
        <div className={`container mt-5`}>
            <Toolbar theme={`dark`} />
        </div>
  );
}

function Toolbar(props) {
    return (
        <ThemeButton theme={props.theme} />
    );
}

function ThemeButton(props) {
    return(
        <Button1 theme={props.theme} />
    );
}

function Button1(props) {

    const clickButton = () => alert(`사용한 부트스트랩 테마 : ${props.theme}`);

    return(
        <button type={`button`} className={`btn btn-${props.theme}`} onClick={clickButton}>
            {props.theme} 테마 버튼
        </button>
    );
}

export default App
