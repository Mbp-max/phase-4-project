import React from 'react';
import { Routes, Route } from "react-router-dom";
import ProfileStats from "./ProfileStats";
import ProfileStreem from "./ProfileStreem";
import ProfileQueue from "./ProfileQueue";
import ProfileSavedReviews from "./ProfileSavedReviews";


function Profile() {
    return (

        <div className="Profile">
            <div className="Banner">
                <h1 className="Tittle"> Ticket Stubs </h1>
            </div>
            <ProfileStats />
            <ProfileStreem />
            <Routes>
                <Route exact path="/queue" element={<ProfileQueue />} />
                {/* <ProfileQueue />
                <Route exact path="/userName/savedReviews">
                    <ProfileSavedReviews />
                </Route> */}
            </Routes>
        </div>
    );
}

export default Profile;