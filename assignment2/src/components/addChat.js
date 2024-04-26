import React, { useState } from "react";
import {auth, db} from "../firebaseSettings";
import {doc, addDoc, collection, serverTimestamp,  updateDoc} from "firebase/firestore";

const AddChat = () => {    
    const writeName = async(event) => {
        console.log("create chat.");
        let name = prompt("Enter chatroom name.");
        if(name === null || name === ""){
            alert("cancel create");
        }else{
            const {uid} = auth.currentUser;
            await addDoc(collection(db, "chatRooms"), {
                text: name,
                createdAt: serverTimestamp(),
                uid,
            })
            .then(docRef => {
                console.log(docRef.id); 
                updateDoc(doc(db, "chatRooms", docRef.id), {chatRoomID: docRef.id});
                alert("create " + name + " finished");
            })
            .catch(error => {
                console.log(error);
            })
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

