import React, {useState} from 'react';
import {FaStar} from "react-icons/fa"


function ReviewMovieCard({poster_path, title, overview, release_date, vote_average}){
    const [reviewModal, setReviewModal] = useState(false);
    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    const toggleReviewModal = () => { setReviewModal(!reviewModal) };
    
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const review_body = document.getElementById("form-field").value

        const newReview = {poster_path, title, overview, release_date, vote_average, review_body}
        console.log(newReview);
        // fetch(`http://localhost:3000/movie_reviews`, {
        //     method: "POST",
        //     headers:{
        //         "Content-Type": "application/json",
        //         Accepts: "application/json"
        //     },
        //     body: JSON.stringify(newReview)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
        }

    return(
        <div className="movie-card">
            <img src={IMG_API + poster_path} alt={title}/>
            <p>{title}</p>
            <button onClick={toggleReviewModal}> Leave A Review</button>
{reviewModal && (
            
                    <div className="modal" onSubmit={handleReviewSubmit}>
                <div className="overlay">
                    <div className="modal-content">
                        <p className="review-title">Your review For {title}</p>
                        <input placeholder="Write Your Review Here" id="form-field"></input>
                        {/* <FaStar size={50}/> */}
                    <button className="close-modal" onClick={handleReviewSubmit} >Submit</button>
                    </div>
                </div>
                    </div>
            
)}
</div>
    )

}
export default ReviewMovieCard;