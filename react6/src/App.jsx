import Parent from "./components/Parent.jsx";
import Parent2 from "./components/Parent2.jsx";
import Join from "./components/Join.jsx";

function App() {

    return (
        <div className={'container text-center mt-5'}>
            <h3>상태 공유하기</h3>
            <Parent/>
            
            <br/><hr/><br/>
            <h3>상태 끌어올리기</h3>
            <Parent2/>

            <br/><br/>

            <h3>예제</h3>
            <Join/>
        </div>
    );
}

export default App
