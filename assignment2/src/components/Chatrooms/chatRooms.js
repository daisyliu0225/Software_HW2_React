import React, { useState, useRef, useEffect } from "react";
import Users from "../users";
import {auth, db} from "../../firebaseSettings";
import {addDoc, collection, serverTimestamp, where} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    query, orderBy, onSnapshot, limit,
} from "firebase/firestore";
import AddChat from "./addChat";



const ChatRooms = () => {
    const [roomname, setName] = useState([]);
    const [user] = useAuthState(auth);
    const scroll = useRef();

    useEffect(() => {
        const rooms = query(
            collection(db, "chatRooms"),
            where("creator", "==", user.email),
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
                {roomname
                    .map((name) => (
                        <Users roomName={name}/>
                ))}
            </div>
            <span ref={scroll}></span>
        </main>
    )
}

export default ChatRooms;