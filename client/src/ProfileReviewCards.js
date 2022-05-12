import React from 'react';


function ProfileReviewCards({review, user}) {

    console.log(user.username)
    const {rating, review_text, movie} = review
    const {title, overview, poster_path, release_date, vote_average} = movie
    const IMG_API = "https://image.tmdb.org/t/p/w1280"

    function handleDeleteReview(){
        
    }

    return (
        <div className="ReviewCards">
            {/* <h1 className="UserName">  *insert pic* username </h1> */}
            <img src={IMG_API + poster_path} alt={title} className="photo" />
            <div className="MovieStats">
                <h1 className="MovieTitle">
                    {title}</h1>
                <p>Average Rating: {vote_average}</p>
                <p>Released: {release_date}</p>
                <p>synopsis: {overview}</p>
                <p>{user.username}'s Review: {review_text}</p>
                <p>Rating: {rating}</p>
            </div>
            <button onClick={handleDeleteReview}>Delete Review</button>
        </div>
    );
}

export default ProfileReviewCards;