import React from "react"

const LeftPanel = () => {

    const addChat = () => {
        console.log("addChat clicked")
    }

    return(
        <div className="leftPanel">
            <h1 className="leftChat">Chats</h1>
            <button onClick={addChat}  className="addChat" type="button">
                Add
            </button>
        </div>
    );
};

export default LeftPanel;