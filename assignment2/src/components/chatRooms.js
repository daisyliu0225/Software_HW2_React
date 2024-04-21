import React, { useState, useRef, useEffect } from "react";
import Users from "./users";
import {auth, db} from "../firebaseSettings";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {
    query, orderBy, onSnapshot, limit,
} from "firebase/firestore";
import AddChat from "./addChat";


const ChatRooms = () => {
    const [roomname, setName] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const rooms = query(
            collection(db, "chatRooms"),
            orderBy("createdAt", "desc"),
            limit(50)
        );

        const unsubscribe = onSnapshot(rooms, (QuerySnapshot) => {
            const fetchedRooms = [];
            QuerySnapshot.forEach((doc) => {
                fetchedRooms.push({ ...doc.data(), id: doc.id});  
            });
            const sortedRooms = fetchedRooms.sort(
                (a, b) => a.createdAt - b.createdAt
            );
            setName(sortedRooms);
        });
        return () => unsubscribe;
    }, []);

    return (
        <main className="chat-rooms">
            <AddChat/>
            <div className="chat-wrapper">
                <Users roomName={"public"}/>
                {roomname.map((name) => (
                    <Users key={name.id} roomName={name.text}/>
                ))}
            </div>
            <span ref={scroll}></span>
        </main>
    )
}

export default ChatRooms;