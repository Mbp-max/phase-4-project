import React from 'react';
import { Route, Switch } from "react-router-dom";
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
            <Switch>
                <Route exact path="/userName/queue">
                    <ProfileQueue />
                </Route>
                <Route exact path="/userName/savedReviews">
                    <ProfileSavedReviews />
                </Route>
            </Switch>
        </div>
    );
}

export default Profile;