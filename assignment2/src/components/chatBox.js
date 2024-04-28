import React, {useEffect, useRef, useState }from "react";
import NavBar from "./navBar";
import SendMessage from "./Messages/sendMessage";
import ChatRooms from "./Chatrooms/chatRooms";
import AddUser from "./addUser";
import Wrapper from "./wrapper";
import Profile from "./profile";


const ChatBox = () => {
    const scroll = useRef();
    const [room, setRoom] = useState("");
    return (
        <main className="chat-box">
            <NavBar/>
            <AddUser/>
            <ChatRooms clickroom={setRoom}/>
            <Profile/>
            <div className="messages-wrapper">
                <Wrapper clickroom={room}/>
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll}/>
        </main>
    );
};

export default ChatBox;