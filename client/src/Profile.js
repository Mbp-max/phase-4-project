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
  const [refetch, setRefetch] = useState(false);
  useEffect(getUserReviews, [refetch]);

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

    <ProfileReviewCards setUserReviews={setUserReviews} userReviews={userReviews} review={review} user={user} setRefetch={setRefetch} refetch={refetch}/>

  ));

  return (
    <>
      <div className="Profile">
        <div className="ProfileStats">
          {/* <h1 className="UserName">{user.username} </h1> */}
        </div>
        {displayingReviewCards}
      </div>
    </>
  );
}

export default Profile;
