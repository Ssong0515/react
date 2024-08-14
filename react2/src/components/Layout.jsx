import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

// 함수 컴포넌트 방식으로 생성된 Layout 컴포넌트
// 부모 컴포넌트에서 props를 통하여 데이터를 전달 받음
// 전달받은 props는 컴포넌트 안에서 변수로 받아서 사용 하거나 직접 사용 가능
function Layout(props){
    const height = props.height;
    const header = props.header;
    return(
        // style 속성을 사용하는 html 태그가 jsx 문법이라서 진짜 html이 아니기 때문에 jsx 방식의 css를 사용해야 함
        // jsx 방식의 css 코드는 자바스크립트의 object 타입 {키:값} 으로 입력해야 함
        <div style={{width: props.width, height: height, background: "skyblue"}}>
        {/* html 태그 안에서 {} 사용 시, 자바스크립트 소스코드 사용 가능 */}
            {header}
            <Main />
            {props.footer}
        </div>
    );
}
export default Layout;