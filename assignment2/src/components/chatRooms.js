import React, {useRef} from "react";

const ChatRooms = () => {
    const scroll = useRef();
    return (
        <main className="chat-rooms">
            <div className="chat-title">
                <h1 className="chats">Chats
                    <button className="addchat" type="button">Add</button>
                </h1>
            </div>
            <div className="chat-wrapper"></div>
            <span ref={scroll}></span>
        </main>
    )
}

export default ChatRooms;