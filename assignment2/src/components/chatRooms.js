import React, { useState, useRef, useEffect } from "react";
import Users from "./users"

const ChatRooms = () => {
    const [roomname, setName] = useState([]);
    const scroll = useRef();

    const writeName = () => {
        console.log("create chat.");
        let name = prompt("Enter chatroom name.");
        if(name == null || name == ""){
            alert("cancel create");
        }else{
            setName([...roomname, name]);
            alert("create " + name + " finished");
        }
    }
    
    return (
        <main className="chat-rooms">
            <div className="chat-title">
                <h1 className="chats">Chats
                    <button className="addchat" type="button" onClick={writeName}>Add</button>
                </h1>
            </div>
            <div className="chat-wrapper">
                {roomname.map((name) => (
                    <Users key={name.id} roomName={name}/>
                ))}
            </div>
            <span ref={scroll}></span>
        </main>
    )
}

export default ChatRooms;