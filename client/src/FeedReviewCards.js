import React from 'react';
import {useState} from 'react';


function FeedReviewCards({review, currentUser}) {
    const { rating, review_text, movie, user } = review;
    const { title, overview, poster_path, release_date, vote_average, id } = movie;
    const {username, email} = user;
    const IMG_API = "https://image.tmdb.org/t/p/w1280";
    const [feedReviewModal, setFeedReviewModal] = useState(false);
    

    console.log(currentUser.id)


    function handleCloseFeedWindow() {
        setFeedReviewModal(!feedReviewModal);
      }

    function handleFeedReview(e){
        e.preventDefault();
        const review_text = document.getElementById("review_text").value;
        const rating = document.getElementById("review_rating").value;
        const newUserReview = {
            rating,
            review_text,
            user_id: currentUser.id,
            movie_id: id,
          };
          console.log(newUserReview);
      
          fetch(`/reviews`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accepts: "application/json",
            },
            body: JSON.stringify(newUserReview),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
            setFeedReviewModal(!feedReviewModal);
    }
    return (
        <div className="movie-card">
        {/* <h1 className="UserName">  *insert pic* username </h1> */}
        <img src={IMG_API + poster_path} alt={title} className="photo" />
        <div className="MovieStats">
          <h1 className="MovieTitle"> {username} Recently Watched {title}</h1>
          <p>Average Rating: {vote_average}</p>
          <p>Released: {release_date}</p>
          <p>synopsis: {overview}</p>
          <p>
            My Review: {review_text}
          </p>
          <p>Rating: {rating}</p>
        <div className="seen-it">Seen it ?  </div>
        <button onClick={handleCloseFeedWindow}>Add Your Own Review</button>
        {feedReviewModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <p className="review-title">Your review For {title}</p>
              <input
                placeholder="Write Your Review Here"
                id="review_text"
              ></input>
              <input placeholder="Your Rating" id="review_rating"></input>
              {/* <FaStar size={50}/> */}
              <button className="close-modal" onClick={handleFeedReview}>
                Submit
              </button>
              <button onClick={handleCloseFeedWindow}>X</button>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    )
}

export default FeedReviewCards;