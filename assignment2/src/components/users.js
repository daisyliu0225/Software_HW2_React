import React from "react";
import chat from "../pics/avatar/chat.png"
import { changeRoom } from "../com_src/chatRoomsrc";


const Users = ({ roomName, key, time}) => {
    return (
        <main className="user-panel">
            <button className="avatar" onClick={() => changeRoom(time)}>
                <img src={chat} className="avatar-pic"></img>
                <h1 className="name">{roomName}</h1>
            </button>
        </main>
    )
}

export default Users;