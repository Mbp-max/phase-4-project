import React from 'react';
import FeedStreem from './FeedStreem';
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"

function Feed({user}) {
    console.log(user)

    return (
        
        <div className="FeedPage">
            <div className="Banner">
            <h1 className="Tittle"> Your Feed </h1>
            </div>
            <FeedStreem />
            <Link to="/userName/" className="SaveButton">{user.username}</Link>
        </div>
    );
}

export default Feed;