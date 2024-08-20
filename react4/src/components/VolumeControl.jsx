import {useEffect, useState} from "react";

function VolumeControl() {

    const [volume, setVolume] = useState(0);

    useEffect(() => {
        setVolume(5);
    }, []);

    useEffect(() => {

        if (volume < 0) {
            setVolume(0)
            alert(`0 보다 작은 값으로 설정 할 수 없습니다.`)
        } else if (volume > 10) {
            setVolume(10)
            alert(`10 보다 큰 값으로 설정 할 수 없습니다.`)
        }
    }, [volume])

    const changeValue = (e) => {
        const valueChange = (e.target.name === `up`) ? 1 : -1;
        setVolume(volume + valueChange);
    }

    return (
        <div className={`d-flex gap-3`}>
            <button type={`button`} className={`btn btn-primary`} name={`up`} onClick={changeValue}>up</button>
            <span>{volume}</span>
            <button type={`button`} className={`btn btn-primary`} name={`down`} onClick={changeValue}>down</button>
        </div>
    );
}

export default VolumeControl;