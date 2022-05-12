import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileStats from "./ProfileStats";
import ProfileStreem from "./ProfileStreem";
import ProfileQueue from "./ProfileQueue";
import ProfileSavedReviews from "./ProfileSavedReviews";
import { useEffect, useState } from "react";
import ProfileReviewCards from "./ProfileReviewCards";
import { Link } from "react-router-dom";

function Profile({ user }) {
  const { id, username, email } = user;
  const [userReviews, setUserReviews] = useState([]);
  useEffect(getUserReviews, []);

  function getUserReviews() {
    fetch("/reviews")
      .then((resp) => resp.json())
      .then((data) => setUserReviews(data));
  }

  const currrentUserReviews = userReviews.filter(
    (review) => review.user.id === id
  );

  console.log(currrentUserReviews);

  const displayingReviewCards = currrentUserReviews.map((review) => (
    <ProfileReviewCards review={review} user={user} />
  ));

  return (
    <>
      <div className="Profile">
        <div className="Banner">
          <h1 className="Tittle"> Your Dashboard </h1>
        </div>
      <div className="ProfileStats">
        <h1 className="UserName">{user.username} </h1>
        <Link to="/userName/followers" className="SaveButton">
          Followers
        </Link>
        <Link to="/userName/following" className="SaveButton">
          Following
        </Link>
        <Link to="/newreview" className="SaveButton">
          New Review
        </Link>
      </div>

        {/* <ProfileStats />
            <ProfileStreem /> */}
        {displayingReviewCards}
        <Routes>
          <Route exact path="/queue" element={<ProfileQueue />} />
          {/* <ProfileQueue />
                <Route exact path="/userName/savedReviews">
                    <ProfileSavedReviews />
                </Route> */}
        </Routes>
      </div>
    </>
  );
}

export default Profile;
