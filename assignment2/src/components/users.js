import React from "react";
import chat from "../pics/avatar/chat.png"

export var roomID = "ZLsINfCEtpgqJds0qjnq";

const Users = ({ roomName }) => {
    const changeRoom = () => {
        roomID = roomName.chatRoomID;
        console.log(roomID);
    }

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