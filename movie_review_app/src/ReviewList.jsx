import ReviewItem from "./ReviewItem.jsx";

function ReviewList(props){
    const reviews = props.reviews

    return(
        <div className={`list-group mt-3`}>
            {reviews.map((review, index) => (
                <ReviewItem key={index} review={review}/>
            ))}
        </div>
    );
}

export default ReviewList;