import React, { useState } from "react";
import {auth, db} from "../firebaseSettings";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import sendMessagecode from "../com_src/sendMsrc";

const SendMessage = ({ scroll }) => {
    const [message, setMessage] = useState("");

    return (
        <form onSubmit={(event) => sendMessagecode(event)} className="send-message">
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
            <button type="submit">Send</button>
        </form>
    );
};

export default SendMessage;