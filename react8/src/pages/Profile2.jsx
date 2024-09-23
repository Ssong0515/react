import {useNavigate, useParams} from "react-router-dom";
import profile1 from "./Profile1.jsx";

function Profile2(){

    const profile = useParams();
    console.log(profile)

    const navigate = useNavigate();
    const goPrev = () => navigate(-1);
    const goNext = () => navigate(1);
    const goAbout = () => navigate(`/about`);

    return(
        <div>
            <h1>Profile2 페이지</h1>
            <p>url 파라미터 방식으로 데이터를 가져오는 페이지</p>
            <hr/>
            <h4>useParams()를 사용, 파라미터 1 : {profile.username}</h4>
            <h4>useParams()를 사용, 파라미터 2 : {profile.age}</h4>

            <hr/>
            <button type={`button`} className={`btn btn-primary me-2`} onClick={goPrev}>뒤로가기</button>
            <button type={`button`} className={`btn btn-primary me-2`} onClick={goNext}>앞으로 가기</button>
            <button type={`button`} className={`btn btn-primary me-2`} onClick={goAbout}>about으로 가기</button>

        </div>
    );
}

export default Profile2;