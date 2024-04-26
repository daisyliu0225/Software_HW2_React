import React from "react";
import addUser from "../pics/avatar/add_icon.png"
import {auth} from "../firebaseSettings";
import 'firebase/auth';
import { fetchSignInMethodsForEmail, getAuth } from "firebase/auth";
import {doc, addDoc, collection, serverTimestamp,  updateDoc} from "firebase/firestore";

const AddUser = () => {

    const AddUserfunc = () => {
        console.log("AddUser clicked");
        const newUser = prompt("Add new user.");
        if(newUser === null || newUser === ""){
            alert("cancel add user");
        }else{
            fetchSignInMethodsForEmail(auth, newUser).then((signInMethods) => {
              if (signInMethods.length > 0) {
                // User found, proceed with adding
                console.log(signInMethods);
                
                alert(newUser + " added");
              } else {
                // User does not exist
                alert(newUser + " does not exist.");
              }
            })
            .catch((error) => {
              // Error occurred
              alert("An error occurred. Please try again later.");
              console.error(error);
            });
        }
    };

    return (
        <main className="message-nav">
            <label for="add-btn" className="add-title">Add User</label>
            <button className="add-btn" onClick={AddUserfunc}>
                <img src={addUser} className="add-user"></img>
            </button>
        </main>
    )
}

export default AddUser;