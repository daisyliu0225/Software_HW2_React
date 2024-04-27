import React, { useState } from "react";
import chat from "../pics/avatar/chat.png"
import Wrapper from "./wrapper";
export var roomID = "";

const Users = ({ roomName, clickroom }) => {
    const changeRoom = (id) => {
        console.log("change rooms");
        roomID = id;
        clickroom(id);
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