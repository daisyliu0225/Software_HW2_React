import React from "react";
import { logOut } from "../com_src/emailLogin";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <h1>ChatApp</h1>
            <button onClick={logOut} className="sign-out" type="button">
                Log Out
            </button>
        </nav>
    );
};

export default NavBar;