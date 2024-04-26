import React from "react";
import chat from "../pics/avatar/chat.png"
import { changeRoom } from "../com_src/chatRoomsrc";


const Users = ({ roomName }) => {
    return (
        <main className="user-panel">
            <button className="avatar" onClick={() => changeRoom(roomName.chatRoomID)}>
                <img src={chat} className="avatar-pic"></img>
                <h1 className="name">{roomName.text}</h1>
            </button>
        </main>
    )
}

export default Users;