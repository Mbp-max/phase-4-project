function ReviewMovieCard({poster_path, title}){
    const IMG_API = "https://image.tmdb.org/t/p/w1280";
    return(
        <div className="movie-card">
            <img src={IMG_API + poster_path} alt={title}/>
            <p>{title}</p>
        </div>
    )

}
export default ReviewMovieCard;