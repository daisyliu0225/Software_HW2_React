import React, { useState } from "react";
import {auth, db} from "../../firebaseSettings";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import { roomID } from "../users";
import { useAuthState } from "react-firebase-hooks/auth";
import NotificationComponent from "../notification.js";
import { displayname, photourl } from "../profile.js";

const SendMessage = ({ scroll }) => {
    const [message, setMessage] = useState([]);
    console.log(roomID);
    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
            alert("Enter valid message");
            return;
        }
        if(roomID === ""){
            alert("You cannot send messages here.");
            return;
        }
        const { uid } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayname,
            avatar: photourl,
            createdAt: serverTimestamp(),
            parent: roomID,
            uid,
        });
        setMessage("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <form onSubmit={(event) => sendMessage(event)} className="send-message">
        <label htmlFor="messageInput" hidden>
            Enter Message
        </label>
        <input
            id="messageInput"
            name="messageInput"
            type="text"
            className="form-input__input"
            placeholder="type message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <NotificationComponent>
            <button type="submit" className="submitButton"></button>
        </NotificationComponent>
        </form>
    );
};

export default SendMessage;