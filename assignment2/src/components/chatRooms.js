import React, {useRef} from "react";
import Users from "./users"

const ChatRooms = () => {
    const scroll = useRef();
    return (
        <main className="chat-rooms">
            <div className="chat-title">
                <h1 className="chats">Chats
                    <button className="addchat" type="button">Add</button>
                </h1>
            </div>
            <div className="chat-wrapper"><Users/></div>
            <span ref={scroll}></span>
        </main>
    )
}

export default ChatRooms;