import React from "react"
import addChat from "../pics/add.png"

const LeftPanel = () => {
    return(
        <div className="leftPanel">
            <div>
                <h1 className="leftChat">Chats</h1>
                <button className="addChat">
                <img
                    onClick={console.log("addChat clicked")}
                    src={addChat}
                    width="40"
                    height="40"
                    alt="addChat"
                    type="button"
                />
                </button>
            </div>
        </div>
    );
};

export default LeftPanel;