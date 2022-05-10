import React from 'react';
import { Link } from "react-router-dom";

function ProfileStats() {

    // function routeChangeQueue() {

    // }

    return (
        <div className="ProfileStats">
            <h1 className="UserName">  *insert pic* username </h1>

            <Link to="/userName/followers" className="SaveButton">Followers</Link>

            <Link to="/userName/following" className="SaveButton">Following</Link>

            <Link to="/userName/queue" className="SaveButton">Queue</Link>

            <Link to="/userName/savedReviews" className="SaveButton">Saved Reviews</Link>

            <div className="ProfileMath">
                <p>Movies Seen:</p>
                <p>Favorite Genre:</p>
                <p>Most Watched Director:</p>
            </div>
        </div>
    );
}

export default ProfileStats;