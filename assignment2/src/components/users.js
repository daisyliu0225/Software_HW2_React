import React, { useState } from "react";
import chat from "../pics/avatar/chat.png"
export var roomID = "";
export var roomText = " ";

const Users = ({ roomName, clickroom }) => {
    const changeRoom = (room) => {
        console.log("change rooms");
        roomID = room.chatRoomID;
        roomText = room.text;
        clickroom(roomID);
    }

    return (
        <main className="user-panel">
            <button className="avatar" onClick={()=>changeRoom(roomName)}>
                <img src={chat} className="avatar-pic"></img>
                <h1 className="name">{roomName.text}</h1>
            </button>
        </main>
    )
}

export default Users;