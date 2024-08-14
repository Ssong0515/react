import karina from "./assets/aespa1.webp"
import winter from "./assets/aespa2.webp"
import ningning from "./assets/aespa3.webp"
import jijel from "./assets/aespa4.webp"
import PhotoCard from "./components2/PhotoCard.jsx";

const aespaData = [
    {name: '카리나', img: karina},
    {name: '윈터', img: winter},
    {name: '닝닝', img: ningning},
    {name: '지젤', img: jijel},
]

function App3() {
    return (
        <div>
            <div className={"row"}>
                <div className={"col"}>
                    <PhotoCard data={aespaData[0]}/>
                </div>
                <div className={"col"}>
                    <PhotoCard data={aespaData[1]}/>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <PhotoCard data={aespaData[2]}/>
                </div>
                <div className={"col"}>
                    <PhotoCard data={aespaData[3]}/>
                </div>
            </div>

        </div>
    );
}

export default App3;