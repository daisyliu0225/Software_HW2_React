import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

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