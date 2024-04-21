import React, { useState } from "react";
import {auth, db} from "../firebaseSettings";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";

const AddChat = () => {    
    const writeName = async(event) => {
        console.log("create chat.");
        let name = prompt("Enter chatroom name.");
        if(name == null || name == ""){
            alert("cancel create");
        }else{
            const {uid} = auth.currentUser;
            await addDoc(collection(db, "chatRooms"), {
                text: name,
                createdAt: serverTimestamp(),
                uid,
            });
            alert("create " + name + " finished");
        }
    };

    return (
        <div className="chat-title">
            <h1 className="chats">Chats
                <button className="addchat" type="button" onClick={(event) => writeName(event)}>Add</button>
            </h1>
        </div>
    )
}

export default AddChat;

