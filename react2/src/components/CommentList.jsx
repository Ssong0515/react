import Comment from "./Comment.jsx";

const commentList = [
    {name: '카리나', comment: '안녕하세요'},
    {name: '윈터', comment: '안녕하세요'},
    {name: '닝닝', comment: '안녕하세요'},
    {name: '지젤', comment: '안녕하세요'}
]

function CommentList() {
    return (
        <div>
            {
                commentList.map((item, index) => {
                    return (
                        // map() 을 사용하여 자식 컴포넌트 여러개 출력할 경우 key 속성을 반드시 지정해야 함
                        // key 속성은 각각의 자식 컴포넌트를 식별하는 역할을 함
                        // 식별할 수 있는 key 값이 없을 경우, index를 사용
                        <Comment name={item.name} comment={item.comment} key={index}/>
                    );
                })
            }

        </div>
    );
}

export default CommentList;