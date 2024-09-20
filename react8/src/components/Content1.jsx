import ProfilePage1 from "./ProfilePage1.jsx";
import {useContext} from "react";
import ThemeContext from "../contexts/ThemeContext.jsx";

function Content1(){

    const themeValue = useContext(ThemeContext);

    return(
        <div className={`p-3 border border-primary`}>
            <ProfilePage1 theme={themeValue}/>
        </div>
    )
}

export default Content1;