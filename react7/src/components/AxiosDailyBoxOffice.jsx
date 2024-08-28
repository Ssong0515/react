import {useState} from "react";
import axios from "axios";

function AxiosDailyBoxOffice() {

    const [datas, setDatas] = useState([]);


    const fetchData = () => {
        const date = "20240627"
        axios.get(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=${date}`)
            .then(res => {
                const {dailyBoxOfficeList} = res.data.boxOfficeResult

                setDatas(dailyBoxOfficeList)

            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className={`mt-3`}>
            <div className={`row`}>
                <div className={`col-sm mx-auto`}>
                    <table className={`table table-hover table-striped`}>
                        <colgroup>
                            <col width={'10%'}/>
                            <col width={'40%'}/>
                            <col width={'15%'}/>
                            <col width={'20%'}/>
                            <col width={'15%'}/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>개봉일</th>
                            <th>당일 관람객</th>
                            <th>누적 관람객</th>
                        </tr>
                        </thead>
                        <tbody>

                        {datas.length === 0
                            ? (
                              <tr>
                                  <td colSpan={5} className={`text-center`}>조회된 내용이 없습니다.</td>
                              </tr>
                            )
                            : datas.map(({rank, movieNm, openDt, audiCnt, audiAcc}, index) => (
                            <tr key={index}>
                                <td>{rank}</td>
                                <td>{movieNm}</td>
                                <td>{openDt}</td>
                                <td>{audiCnt}</td>
                                <td>{audiAcc}</td>
                            </tr>
                            )
                        )}
                        </tbody>
                    </table>
                    <div className={`mt-3 d-flex justify-content-end`}>
                        <button type={`button`} className={`btn btn-primary`} onClick={fetchData}>일일 영화 순위 조회</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AxiosDailyBoxOffice;