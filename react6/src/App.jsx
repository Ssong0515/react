import Parent from "./components/Parent.jsx";
import Parent2 from "./components/Parent2.jsx";
import Join from "./components/Join.jsx";
import SplitPane from "./components/SplitPane.jsx";
import WelcomeDialog from "./components/WelcomeDialog.jsx";
import Contacts from "./components/Contacts.jsx";
import Chat from "./components/Chat.jsx";
import WelcomeDialog2 from "./components/WelcomeDialog2.jsx";
import SignUpDialog from "./components/SignUpDialog.jsx";
import ProfileCard from "./components/ProfileCard.jsx";

function App() {

    return (
        <div className={'container text-center mt-5'}>
            {/*<h3>상태 공유하기</h3>*/}
            {/*<Parent/>*/}
            
            {/*<br/><hr/><br/>*/}
            {/*<h3>상태 끌어올리기</h3>*/}
            {/*<Parent2/>*/}

            {/*<br/><br/>*/}

            {/*<h3>예제</h3>*/}
            {/*<Join/>*/}

            {/*<h3>합성과 상속 포함(containment)</h3>*/}
            {/*<WelcomeDialog/>*/}

            {/*<br/><br/><br/>*/}
            {/*<SplitPane left={<Contacts/>} right={<Chat/>}/>*/}

            {/*<h3>Specialization</h3>*/}
            {/*<WelcomeDialog2/>*/}

            <h3>Containment + Specialization</h3>
            <SignUpDialog/>
            <ProfileCard/>



        </div>
    );
}

export default App
