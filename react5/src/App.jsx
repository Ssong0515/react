import Event1 from "./components/Event1.jsx";
import ConfirmButton from "./components/ConfirmButton.jsx";
import Greeting from "./components/Greeting.jsx";
import LoginControl from "./components/LoginControl.jsx";
import MailBox from "./components/MailBox.jsx";
import LoginControl2 from "./components/LoginControl2.jsx";
import MainPage from "./components/MainPage.jsx";
import LandingPage from "./components/LandingPage.jsx";
import AttendanceBook from "./components/AttendanceBook.jsx";
import NameForm from "./components/NameForm.jsx";
import RequestForm from "./components/RequestForm.jsx";
import FruitSelect from "./components/FruitSelect.jsx";
import Reservation from "./components/Reservation.jsx";
import Join from "./components/Join.jsx";

function App() {

  return (
      <div className={'container mt-5'}>
          <h3>이벤트 사용하기</h3>
          <Event1/>

          <br/>
          <hr/>
          <br/>

          <h3>클래스 컴포넌트 이용한 이벤트</h3>
          <ConfirmButton/>

          <br/>
          <hr/>
          <br/>

          <h3>조건부 렌더링</h3>
          <Greeting isLoggedIn={false}/>

          <br/>
          <hr/>
          <br/>

          <h3>엘리먼트 변수</h3>
          <LoginControl/>

          <br/>
          <hr/>
          <br/>

          <h3>인라인 조건문</h3>
          <MailBox unreadMessages={0}/>
          <br/><br/>
          <MailBox unreadMessages={10}/>

          <br/>
          <hr/>
          <br/>

          <h3>인라인 if else</h3>
          <LoginControl2/>

          <br/>
          <hr/>
          <br/>

          <h3>조건부 렌더링 막기</h3>
          <MainPage/>

          <br/>
          <hr/>
          <br/>

          <h3>마무리 예제</h3>
          <LandingPage/>

          <br/>
          <hr/>
          <br/>

          <h3>리스트와 키</h3>
          <AttendanceBook/>

          <br/>
          <hr/>
          <br/>

          <h3>폼(form)- input 태그 사용하기</h3>
          <NameForm/>

          <br/>
          <hr/>
          <br/>

          <h3>textarea 태그</h3>
          <RequestForm/>

          <br/>
          <hr/>
          <br/>

          <h3>select 태그</h3>
          <FruitSelect/>

          <br/>
          <hr/>
          <br/>

          <h3>checkbox 태그</h3>
          <Reservation/>

          <br/>
          <hr/>
          <br/>

          <h3>종합문제</h3>
          <Join/>

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      </div>
  );
}

export default App
