import React from "react";
import { logOut } from "../com_src/emailLogin";

const Chat = () => {
    return (
        <div>
            <h1>Login Successful~</h1>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}

export default Chat;