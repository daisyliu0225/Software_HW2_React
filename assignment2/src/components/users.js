import React, { useState } from "react";
import chat from "../pics/avatar/chat.png"

export var roomID = "";
export var click = false;

const Users = ({ roomName }) => {
    const changeRoom = (id) => {
        console.log("change rooms");
        roomID = id;
        click = true;
    }

    return (
        <main className="user-panel">
            <button className="avatar" onClick={()=>changeRoom(roomName.chatRoomID)}>
                <img src={chat} className="avatar-pic"></img>
                <h1 className="name">{roomName.text}</h1>
            </button>
        </main>
    )
}

export default Users;