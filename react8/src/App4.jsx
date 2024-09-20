import MemberContext from "./contexts/MemberContext.jsx";
import ThemeContext from "./contexts/ThemeContext.jsx";
import Layout1 from "./components/Layout1.jsx";

function App4(){
    return(
        <div className={`container mt-5`}>
            <ThemeContext.Provider value={`danger`}>
                <MemberContext.Provider value={`karina`}>
                    <Layout1 />
                </MemberContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
}

export default App4;