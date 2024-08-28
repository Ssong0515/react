// axios: ajax 비동기 통신을 하기 위한 자바스크립트 라이브러리
// jQuery - ajax, 리엑트 - axios, fetch
// 사용 시, 해당 컴포넌트에 import 하여 사용
// 단축 메서드를 제공하고 있음 (get, post, put, delete)
// then(콜백함수): 데이터 통신 성공 시, 자동 동작하는 부분
// catch(콜백함수): 데이터 통신 실패 시, 자동 동작하는 부분

// 문법 :
/*
axios({
    url: '접속 주소',
    method: '통신 방식',
    data: {파라미터 값으로 전송할 데이터}
    });
*/

// 단축 사용법:
// 설치: npm install axios
/*
import axios form 'axios';

axios.단축메서드(접속주소, 매개변수)
    .then(response => { 접속 성공 시, 실행할 소스코드 })
    .catch(error => { 접속 실패 시, 실행할 소스코드 });
    
예시:
axios.get('http://localhost:8080/login?id=asdf&pw=1234')
    .then(res => { 성공 시, 실행 소스 코드 })
    .catch(err => { 실패 시, 실행 소스 코드 });

axios.get('http://localhost:8080/login', {
    params: {
        id: 'asdf',
        pw: '1234'
   })
   .then(res => { 성공 소스코드 })
   .catch(err => { 실패 소스코드 });

axios.post('http://localhost:8080/login', {
    id: 'asdf',
    pw: '1234'
   })
   .then(res => { 성공 소스코드 })
   .catch(err => { 실패 소스코드 });

axios.put('http://localhost:8080/login', {
    id: 'asdf',
    pw: '1234'
   })
   .then(res => { 성공 소스코드 })
   .catch(err => { 실패 소스코드 });

axios.delete('http://localhost:8080/login?id=asdf')
   .then(res => { 성공 소스코드 })
   .catch(err => { 실패 소스코드 });

axios.delete('http://localhost:8080/login', {
    data: {
        id: 'asdf'
      })
   .then(res => { 성공 소스코드 })
   .catch(err => { 실패 소스코드 });

 */

import axios from "axios";

function AxiosTest(){

    const getKobisData = () => {
        axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101")
            .then(res => {
                console.log('비동기 통신 성공')

                // axios를 통해 전달되는 데이터는 object 타입
                // config, data, headers, request, status, statusText 의 속성을 가지고 있음
                // 실제 데이터는 data 속성에 담겨 있음

                // 객체 분할 할당을 사용하여 필요한 데이터만 가져옴
                // const {boxOfficeResult} = res.data;
                const {dailyBoxOfficeList} = res.data.boxOfficeResult;

                dailyBoxOfficeList.forEach(item => {
                    let boxOfficeList = '';
                    boxOfficeList += `순위 : ${item.rank}\n`
                    boxOfficeList += `영화명 : ${item.movieNm}\n`
                    boxOfficeList += `개봉일 : ${item.openDt}`;
                    console.log(boxOfficeList)
                })

            })
            .catch(err => {
                console.log('비동기 통신 중 오류 발생')
            })
    }

    return(
        <div>
            <button type={`button`} className={`btn btn-primary`} onClick={getKobisData}>클릭 시, 데이터 가져오기</button>
        </div>
    );
}

export default AxiosTest;