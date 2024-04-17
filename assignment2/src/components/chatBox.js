import React from "react";
import NavBar from "./navBar";
import LeftPanel from './leftPanel';
import SendMessage from "./sendMessage";

const ChatBox = () => {
    return (
        <main className="chat-box">
            <NavBar />
            <SendMessage />
        </main>
    )
}

export default ChatBox;