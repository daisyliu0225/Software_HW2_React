import React, {useEffect, useRef, useState } from "react";
import Message from "./Messages/message";
import { db } from "../firebaseSettings";
import {query, collection, collectionGroup, QuerySnapshot, orderBy, limit, onSnapshot, where} from "firebase/firestore";
import { roomID } from "./users";
import { click } from "./users";

const Wrapper = () => {
    const [messages, setMessages] = useState([]);
    const [clicked, setclick] = useState("false");
    const scroll = useRef();

    useEffect(() => {
        if(click == true){
            setclick("true");
            click = false;
        }
    })

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

    return(
        <main>
            {messages?.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </main>
    );
};
export default Wrapper;