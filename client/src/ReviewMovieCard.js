import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function ReviewMovieCard({
  poster_path,
  title,
  overview,
  release_date,
  vote_average,
  user,
}) {

  console.log()
  const [reviewModal, setReviewModal] = useState(false);
  const [addMovie, setAddMovie] = useState({});
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const toggleReviewModal = () => {
    const newMovie = {
      poster_path,
      title,
      overview,
      release_date,
      vote_average,
    };
    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => setAddMovie(data));
    setReviewModal(!reviewModal);
  };
  const { id } = addMovie;


  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const review_text = document.getElementById("review_text").value;
    const rating = document.getElementById("review_rating").value;

    const newUserReview = {
      rating,
      review_text,
      user_id: user.id,
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
    setReviewModal(!reviewModal);
  };

  function handleCloseWindow() {
    setReviewModal(!reviewModal);
  }

  return (
    <div className="movie-card">
      <img src={IMG_API + poster_path} alt={title} />
      <p>{title}</p>
      <button onClick={toggleReviewModal}> Leave A Review</button>
      {reviewModal && (
        <div className="modal" onSubmit={handleReviewSubmit}>
          <div className="overlay">
            <div className="modal-content">
              <p className="review-title">Your review For {title}</p>
              <input
                placeholder="Write Your Review Here"
                id="review_text"
              ></input>
              <input placeholder="Your Rating" id="review_rating"></input>
              {/* <FaStar size={50}/> */}
              <button className="close-modal" onClick={handleReviewSubmit}>
                Submit
              </button>
              <button onClick={handleCloseWindow}>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ReviewMovieCard;
