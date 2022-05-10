import React from 'react';
import ProfileQueueCards from "./ProfileQueueCards";

function ProfileQueue() {
    return (
        <div>
        <div className="Banner">
            <h1 className="Tittle"> Ticket Stubs </h1>
            </div>
        <div className="ProfileQueue">
            <ProfileQueueCards/>
        </div>
        </div>
    );
}

export default ProfileQueue