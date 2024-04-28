import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, db} from "../firebaseSettings";

const Profile = () => {
    const [user] = useAuthState(auth);
    const { displayName, photoURL } = auth.currentUser;
    return(
        <main className="profile">
            <div className="profile-left">
                <h1 className="profile-title">Profile</h1>
                <img src={photoURL} className="profile-photo"></img>
            </div>
            <div className="profile-wrapper">
                <h2 className="profile-name">{displayName}</h2>
                <h2 className="profile-email">email: {user.email}</h2>
                <button className="profile-settings">settings</button>
            </div>
        </main>
    )
}

export default Profile;