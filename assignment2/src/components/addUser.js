import React, {useState}from "react";
import addUser from "../pics/avatar/add_icon.png"
import {auth} from "../firebaseSettings";
import 'firebase/auth';
import { fetchSignInMethodsForEmail, getAuth } from "firebase/auth";
import { collection, addDoc, serverTimestamp, QuerySnapshot, query, where, getDocs} from "firebase/firestore";
import { roomID, roomText } from "./users";
import { db } from "../firebaseSettings";

const AddUser = () => {
    const AddUserfunc = async() => {
        console.log("AddUser clicked");
        const newUser = prompt("Add new user.");
        if(newUser === null || newUser === ""){
            alert("cancel add user");
        }else if(roomID === ""){
            alert("You cannot add users here.")
        }else{
          fetchSignInMethodsForEmail(auth, newUser).then((signInMethods) => {
            if (signInMethods.length > 0) {
              const chatRoomsRef = collection(db, "chatRooms");

              // Query to check if the user already exists in the chat room
              const q = query(chatRoomsRef, where("creator", "==", newUser), where("chatRoomID", "==", roomID));

              // Execute the query
              getDocs(q).then((querySnapshot) => {
                  // Check if any documents exist
                  if (!querySnapshot.empty) {
                      // User already exists in the chat room
                      alert( newUser + " already exists in the chat room.");
                  } else {
                      // User does not exist, proceed with adding
                      addDoc(chatRoomsRef, {
                          text: roomText,
                          createdAt: serverTimestamp(),
                          creator: newUser,
                          chatRoomID: roomID,
                      })
                      .then(() => {
                          // Data added successfully
                          console.log(newUser + " added");
                          alert(newUser + " added");
                      })
                      .catch((error) => {
                          // Handle errors if any
                          console.error("Error adding document: ", error);
                          alert("Error adding user: " + error.message);
                      });
                  }
              }).catch((error) => {
                  // Handle errors if any
                  console.error("Error getting documents: ", error);
                  alert("Error checking user: " + error.message);
              });
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
                <div className="room-name"><p className="roomText">{roomText}</p></div>
                <div className="add-div">
                    <label for="add-btn" className="add-title">Add User</label>
                    <button className="add-btn" onClick={AddUserfunc}>
                        <img src={addUser} className="add-user"></img>
                    </button>
                </div>
        </main>
    )
}

export default AddUser;