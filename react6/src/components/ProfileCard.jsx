import Card from "./Card.jsx";

function ProfileCard(){
    return(
        <div>
            <Card title={`아이유`} backgroundColor={`DeepPink`}>
                  <p>안녕하세요</p>
                  <p>리액트 처음해봅니다.</p>
            </Card>
        </div>
    );
}

export default ProfileCard;