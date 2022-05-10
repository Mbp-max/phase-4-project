import {React, Link} from 'react';
import FeedReviewCards from './FeedReviewCards';
import NewReview from './NewReview';
function FeedStreem() {
    return (
        <div className="FeedStreem">
        <button> New Review </button>
        <NewReview/>
        {/* <FeedReviewCards /> */}
        </div>
    );
}

export default FeedStreem;