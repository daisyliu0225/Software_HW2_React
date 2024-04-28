import React from "react";
import loginPage from "../pics/login_page.png";
import chatBubble from "../pics/chatBubble.png";
import { signInWithGoogle } from "../firebaseSettings";
import { signInEmail, signUpEmail } from "../com_src/emailLogin"; 

const Login = () => {

    return (
        <main className="Login">
            <div id="custom-alert">
            </div>
            <div className="page">
                <div className="left-ani">
                    <div className="message-bar">
                        <div className="txt-bubble">
                            <div className="limit">
                                <div className="typewriter">
                                    <h1 className="title">Connect together.🥰</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src={loginPage} width="100%" height="70%"/>
                    </div>
                </div>
                <div className="login">
                    <img className="" src={chatBubble} alt="chatBubble" height="108"/>
                    <h1 className="">Please sign in/register</h1>
                    <table className="inputs">
                        <tr>
                            <td><label for="inputEmail" className="sr-only">Email address</label></td>
                            <td><input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/></td>
                        </tr>
                        <tr>
                            <td><label for="inputPassword" className="sr-only">Password</label></td>
                            <td><input type="password" id="inputPassword" className="form-control" placeholder="Password" required/></td>
                        </tr>
                    </table>
                    <br/>
                    <button className="btn-pri" id="btnLogin" onClick={signInEmail}>Sign in</button>
                    <button className="btn-inf" id="btnGoogle" onClick={signInWithGoogle}>Sign in with Google</button>
                    <button className="btn-second" id="btnSignUp" onClick={signUpEmail}>New account</button>
                    <p className="">by Daisy Liu</p>
                </div>
            </div>
        </main>
    );
};

export default Login;