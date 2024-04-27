import React, {useEffect, useRef, useState }from "react";
import { db } from "../firebaseSettings";
import {query, collection, collectionGroup, QuerySnapshot, orderBy, limit, onSnapshot, where} from "firebase/firestore";
import NavBar from "./navBar";
import SendMessage from "./Messages/sendMessage";
import Message from "./Messages/message";
import ChatRooms from "./Chatrooms/chatRooms";
import AddUser from "./addUser";
import { roomID } from "./users";


const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            where("parent", "==", roomID), 
            orderBy("createdAt", "desc"),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((docSnap) => {
                fetchedMessages.push({ ...docSnap.data(), id: docSnap.id});  
            });

            const sortedMessages = fetchedMessages.sort(
                (a, b) => a.createdAt - b.createdAt
            );
            setMessages(sortedMessages);
        });
        return () => unsubscribe;
    });

    return (
        <main className="chat-box">
            <NavBar/>
            <ChatRooms/>
            <AddUser/>
            <div className="messages-wrapper">
                {messages?.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll}/>
        </main>
    );
};

export default ChatBox;