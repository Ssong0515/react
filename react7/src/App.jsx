import AxiosTest from "./components/AxiosTest.jsx";
import AxiosDailyBoxOffice from "./components/AxiosDailyBoxOffice.jsx";
import AxiosRestApiServerConnect from "./components/AxiosRestApiServerConnect.jsx";

function App() {

    return (
        <div className={`container mt-5`}>
            <h3 className={`text-center`}>Axios를 사용한 비동기 통신</h3>
            {/*<AxiosTest/>*/}
            {/*<AxiosDailyBoxOffice/>*/}
            <AxiosRestApiServerConnect/>
        </div>
    )
}

export default App
