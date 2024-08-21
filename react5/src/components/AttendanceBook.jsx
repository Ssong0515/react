const students = [
    {name: "Inje", id: 1},
    {name: "Steve", id: 2},
    {name: "Bill", id: 3},
    {name: "Jeff", id: 4},
]

{/*// ES6의 배열 함수 map()을 사용하여 배열 students에 있는 요소를 하나씩 출력하여 반복 실행함*/
}

function AttendanceBook() {
    return (
        <ul>
            {
                students.map((student) => {
                    return <li key={student.id}>{student.name}</li>
                })
            }
        </ul>
    )
}

export default AttendanceBook;