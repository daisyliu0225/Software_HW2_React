import React, {useEffect, useRef, useState }from "react";
import NavBar from "./navBar";
import SendMessage from "./Messages/sendMessage";
import Message from "./Messages/message";
import ChatRooms from "./Chatrooms/chatRooms";
import AddUser from "./addUser";
import Wrapper from "./wrapper";



const ChatBox = () => {
    const scroll = useRef();

    return (
        <main className="chat-box">
            <NavBar/>
            <AddUser/>
            <ChatRooms/>
            <div className="messages-wrapper">
                <Wrapper/>
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll}/>
        </main>
    );
};

export default ChatBox;