import MovieItem from "./MovieItem.jsx";

function MovieList(props) {

    const {movies, addReview} = props

    return (
        <div className={`row`}>
            {movies.map(movieData => {
                return <MovieItem key={movieData.id} movieData={movieData} addReview={addReview}/>
            })}
        </div>
    );
}

export default MovieList;