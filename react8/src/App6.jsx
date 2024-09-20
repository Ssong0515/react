import Home from "./pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Profile1 from "./pages/Profile1.jsx";
import Signup from "./pages/Signup.jsx";
import Logout from "./pages/Logout.jsx";
import Profile2 from "./pages/Profile2.jsx";

function App6(){
    return(
        <div className={`container mt-5`}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/pages/login'} element={<Login/>}/>
                    <Route path={'*'} element={<ErrorPage/>}/>
                    <Route path={'/profile1'} element={<Profile1/>}/>
                    <Route path={'/pages'}>
                        <Route index element={<Signup/>} />
                        <Route path={'logout'} element={<Logout/>} />
                        <Route path={'profile2/:username/:age'} element={<Profile2/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App6;