import React from "react";
import addUser from "../pics/avatar/add_icon.png"

const AddUser = () => {
    return (
        <main className="message-nav">
            <label for="add-btn" className="add-title">Add User</label>
            <button className="add-btn">
                <img src={addUser} className="add-user"></img>
            </button>
        </main>
    )
}

export default AddUser;