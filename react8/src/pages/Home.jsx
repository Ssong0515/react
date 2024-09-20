import {Link} from "react-router-dom";

function Home(){
    return(
        <div className={`mt-5 container`}>
            <h1>Home 페이지</h1>
            <p>접속 시 가장 먼저 보이는 페이지</p>

            <Link to={'about'}>소개 페이지로 이동</Link>
        </div>
    )
}

export default Home;