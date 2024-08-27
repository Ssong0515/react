import {useState} from "react";
import ReviewForm from "./ReviewForm.jsx";
import ReviewList from "./ReviewList.jsx";

function MovieItem(props){
    const {movieData, addReview} = props
    const [showReviews, setShowReviews] = useState(false);

    return(
        <div className={`col-md-4 mb-4`}>
            <div className={`card h-100`}>
                <img
                    src={movieData.posterUrl}
                    alt={movieData.title}
                    className={`card-img-top img-fluid`}
                    style={{height: '300px', objectFit: 'cover'}}
                />
                <div className={`card-body`}>
                    <h5 className={`card-title text-center`}>{movieData.title}</h5>
                    <button className={`btn btn-primary d-flex mx-auto mb-3`} onClick={() => setShowReviews(!showReviews)}>
                        {showReviews ? '리뷰 닫기' : '리뷰 쓰기'}
                    </button>
                    {showReviews && (
                        <div>
                            <ReviewForm movieId={movieData.id} addReview={addReview} />
                            <ReviewList reviews={movieData.reviews} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieItem;