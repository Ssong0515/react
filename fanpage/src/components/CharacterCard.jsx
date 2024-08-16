import {useState} from "react";

function CharacterCard(props) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <div className={'card h-100'}>
                <img src={props.data.img} alt={props.data.name} style={{height: '250px', objectFit: 'cover'}}/>
                <div className={'card-body text-center'}>
                    <h5 className={'card-title'}>{props.data.name}</h5>
                    <span className={'d-block'}>투표 수: {count}</span>
                    <button type={'button'} className={'btn btn-primary mt-3'} onClick={() => {
                        setCount(count + 1)
                    }}>투표하기
                    </button>
                </div>
            </div>
        </div>

    );
}

export default CharacterCard;