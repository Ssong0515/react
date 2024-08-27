import Chap3_nav from "./Chap3_nav.jsx";

function Chap3() {
    return (
        <div>
            <Chap3_nav brand={"Gourmet au Catering"} menu1={"About"} menu2={"Menu"} menu3={"Contact"}/>

            <div className={`position-relative`}>
                <img className={`w-100`} src="https://www.w3schools.com/w3images/hamburger.jpg" alt=""/>
                <h1 className={`position-absolute bottom-0 start-0 p-3 text-secondary`}>Le Catering</h1>
            </div>

            <div className={`row mt-5`}>
                <div className={`col-sm`}>
                    <img className={`w-100 p-4`} src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt=""/>
                </div>
                <div className={`col-sm pt-1`}>
                    <h1 className={`text-center p-5`}>About Catering</h1>
                    <h5 className={`text-center pb-2`}>Tradition since 1889</h5>
                    <p className={`p-3`}>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet,
                        consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal
                        ingredients.</p>
                </div>
            </div>

            <br/><br/><hr/>

            <div>

            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>

    );
}

export default Chap3;