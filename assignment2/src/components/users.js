import React, {useRef} from "react";
import girl2 from "../pics/avatar/girl2.png";

const Users = () => {
    const scroll = useRef();
    return (
        <main className="user-panel">
            <div className="avatar">
                <img src={girl2} className="avatar-pic"></img>
                <h1 className="name">Name</h1>
            </div>
        </main>
    )
}

export default Users;