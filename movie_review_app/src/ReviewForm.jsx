import {useState} from "react";

function ReviewForm(props){
    const {movieId, addReview} = props
    const [reviewContent, setReviewContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (reviewContent.trim()) {
            addReview(movieId, reviewContent);
            setReviewContent('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className={`mb-3`}>
                <textarea
                    className={`form-control`}
                    rows="2"
                    value={reviewContent}
                    onChange={e => setReviewContent(e.target.value)}
                    placeholder={'리뷰를 작성 해 주세요'}
                    required
                />
            </div>
            <button type={`submit`} className={`btn btn-secondary d-flex mx-auto`}>리뷰 추가</button>
        </form>
    );
}

export default ReviewForm;