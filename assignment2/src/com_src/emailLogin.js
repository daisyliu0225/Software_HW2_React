import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { roomID } from "../components/users";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseSettings";
import def from "../pics/avatar/profile.png"

function create_alert(type, message) {
    var str_html;
    var alertarea = document.getElementById('custom-alert');
    if (type == "success") {
        str_html = "<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>Success! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        alertarea.innerHTML = str_html;
    } else if (type == "error") {
        str_html = "<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong>Error! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        alertarea.innerHTML = str_html;
    }
}

export const signUpEmail = () => {
    console.log("signupbtn pressed");
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        create_alert("success", " ");
        const chatRoomsRef = collection(db, "users");
        addDoc(chatRoomsRef, {
            text: "user",
            createdAt: serverTimestamp(),
            userEmail: email,
            profilePic: def,
        }).then(docRef => {
            console.log(docRef.id); 
            updateDoc(doc(db, "users", docRef.id), {userID: docRef.id});
        })
        .catch(error => {
            console.log(error);
        })
        email = "";
        password = "";
    })
    .catch((error) => {
        create_alert("error", error.message);
    })
}
//signup email

export const signInEmail = () => {
    console.log("singinbtn pressed");
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        create_alert("success", "");
        email = "";
        password = "";
    })
    .catch((error) => {
        create_alert("error", error.message);
    })
}

export const logOut = () => {
    console.log("logout pressed");
    const auth = getAuth();
    signOut(auth)
    .then(function(){
        roomID = "";
        alert("bye");
    })
}