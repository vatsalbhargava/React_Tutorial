import React from "react";
import { useAuthState, signInWithGoogle, firebaseSignOut } from "../utilities/firebase";
import './Banner.css';

const Banner = ({AppTitle}) => {
    const [user] = useAuthState();

    return (
        <div className="banner-container">
            <div className="title-button-container">
                <h1>{AppTitle}</h1>
                {user ? (
                    <button className="google-signin-btn" onClick={firebaseSignOut}>Sign Out</button>
                ) : (
                    <button className="google-signin-btn" onClick={signInWithGoogle}>Sign In</button>
                )}
            </div>
        </div>
    )
}

export default Banner;
