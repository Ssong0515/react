import Summer_sub from "./Summer_sub.jsx";
import data from "bootstrap/js/src/dom/data.js";

function Summer() {

    const datas = [
        {
            img: "https://www.w3schools.com/w3css/img_5terre.jpg",
            title: "5 Terre",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://www.w3schools.com/w3css/img_monterosso.jpg",
            title: "5 Terre",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://www.w3schools.com/w3css/img_vernazza.jpg",
            title: "5 Terre",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://www.w3schools.com/w3css/img_manarola.jpg",
            title: "5 Terre",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://www.w3schools.com/w3css/img_corniglia.jpg",
            title: "5 Terre",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://www.w3schools.com/w3css/img_riomaggiore.jpg",
            title: "5 Terre",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ]

    return (
        <div>
            <div className={`p-3`} style={{backgroundColor: "#009688"}}>
                <h1 style={{color: "white"}}>Summer Holiday</h1>
            </div>
            <div>
                {datas.map((data, index) =>
                    <div key={index}>
                        <Summer_sub img={data.img} title={data.title} body={data.body}/>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Summer;