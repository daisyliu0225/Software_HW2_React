import React from "react";
import chat from "../pics/avatar/chat.png"


const Users = ({ roomName}) => {
    return (
        <main className="user-panel">
            <div className="avatar">
                <img src={chat} className="avatar-pic"></img>
                <h1 className="name">{roomName}</h1>
            </div>
        </main>
    )
}

export default Users;