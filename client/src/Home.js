import React from 'react';
import HomeAbout from './HomeAbout';
import HomeSignIn from './HomeSignIn';

function Home() {
    return (

        <div className="Home">
            <div className="Banner">
                <h1 className="Tittle"> Ticket Stubs </h1>
            </div>
            <HomeSignIn />
            <HomeAbout />
        </div>
    );
}

export default Home;
