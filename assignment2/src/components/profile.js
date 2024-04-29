import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, db} from "../firebaseSettings";
import { collection, query, where, orderBy, limit, onSnapshot, getDocs } from "firebase/firestore";
import { addDoc, serverTimestamp } from "firebase/firestore";

const Profile = () => {
    const [user] = useAuthState(auth);
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    
    useEffect(() => {
        const fetchUserData = async () => {
            const rooms = query(
                collection(db, "users"),
                where("userEmail", "==", user.email),
                orderBy("createdAt", "desc"),
                limit(1) // Assuming only one document matches the query
            );

            // Execute the query
            getDocs(rooms).then((querySnapshot) => {
            // Check if any documents exist
            if (querySnapshot.empty) {
                // User already exists in the chat room
                const { uid, displayName, photoURL} = auth.currentUser;
                addDoc(collection(db, "users"), {
                    text: displayName,
                    createdAt: serverTimestamp(),
                    userEmail: user.email,
                    profilePic: photoURL,
                })
                .catch((error) => {
                    // Handle errors if any
                    console.error("Error adding document: ", error);
                    alert("Error adding user: " + error.message);
                });
            }
            }).catch((error) => {
            // Handle errors if any
            console.error("Error getting documents: ", error);
            alert("Error checking user: " + error.message);
            });

            try {
                const querySnapshot = await getDocs(rooms);
                querySnapshot.forEach((doc) => {
                    // Access individual document data
                    const userData = doc.data();
                    setDisplayName(userData.text);
                    setPhotoURL(userData.profilePic);
                    displayname = userData.text;
                    photourl = userData.profilePic;
                });
            } catch (error) {
                console.error("Error getting documents: ", error);
            }
        };

        fetchUserData();
    }, [user.email]);

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
export var displayname = "";
export var photourl = "";