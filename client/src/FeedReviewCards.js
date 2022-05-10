import React from 'react';


function FeedReviewCards() {
    return (
        <div className="ReviewCards">
            <h1 className="UserName">  *insert pic* username </h1>
            {/* <img src={} alt={seat.name} /> */}
            <div className="MovieStats">
                <h1 className="MovieTitle">
                    Shrek The Musical </h1>
                <p>Year</p>
                <p>Director</p>
                <p>Length </p>
                <p>Genre</p>
            </div>
            <button className="SaveButton">Save</button>
        </div>
    );
}

export default FeedReviewCards;