import React from "react";
import FeedStreem from "./FeedStreem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileReviewCards from "./ProfileReviewCards";
import FeedReviewCards from "./FeedReviewCards";

function Feed({ user }) {
  const [feed, setFeed] = useState([]);
  const { id, username, email } = user;
  useEffect(gettingFeed, []);
  function gettingFeed() {
    fetch("/reviews")
      .then((res) => res.json())
      .then((data) => setFeed(data));
  }

  const filteredReviews = feed.filter(
    (review) => review.user.id !== id
  )
  const feedCards = filteredReviews.map((review) => <FeedReviewCards review={review} currentUser={user} />);

  return (
    <>
      <div>See What Other Users Are Watching</div>
      <div>{feedCards}</div>
    </>
  );
}

export default Feed;
