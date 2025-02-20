# Software Studio 2023 Spring Midterm Project

## Midterm Project Chatroom

## Announcements

This is a project of the 2023 Spring Software studio class in National Tsing Hua University.
The program is written by daisyliu0225.

## Scoring

| **Basic components** | **Score** | **Check** |
| :------------------- | :-------: | :-------: |
| Membership Mechanism |    15%    |     Y     |
| Firebase page        |    5%     |     Y     |
| Database read/write  |    15%    |     Y     |
| RWD                  |    15%    |     Y     |
| Chatroom             |    20%    |     Y     |

| **Advanced tools**  | **Score** | **Check** |
| :------------------ | :-------: | :-------: |
| Using React         |    10%    |     Y     |
| Third-Party Sign In |    1%     |     Y     |
| Notification        |    5%     |     Y     |
| CSS Animation       |    2%     |     Y     |
| Security            |    2%     |     Y     |

| **Other useful functions** | **Score** | **Check** |
| :------------------------- | :-------: | :-------: |
| Name of functions          |   1~5%    |     Y     |

---

## How to setup your project

- cd Midterm_Project_111060026
- npm init
- npm install
- npm install -g firebase-tools
- npm install firebase@latest
- npm install react-firebase-hooks

---

## How to use

## Panel

- The project has two panels.

1. Login

- The first panel is the login page. The panel enables user to login or signup into the chatroom.
- ![login-panel](readme/panel/login.png)<br>

2. Main page

- The second panel is the main page. It enables users to do the following functions in the app.
- ![main-page](readme/panel/main.png)<br><br>

## Basic Functions

- The following are what the user may do in the chatApp and how to do it.<br>

Login/Sign up

-

### Sign up

- Type the user email and password into email address and password.
- ![signup example](readme/functions/login/signup.png)
- Press the sign up button.
- ![sign up button](readme/functions/login/newacc.png)
- The user will be logged in.
- ![logged in](readme/functions/login/signup2.png)<br>

### Sign in

- Type the user email and password into email address and password.
- ![signup example](readme/functions/login/signup.png)
- Press the sign in button.
- ![sign up button](readme/functions/login/signin.png)
- The user will be logged in.
- ![logged in](readme/functions/login/signup2.png)<br>

### Use google to sign in/sign up

- Press the google sign in button.
- ![google](readme/functions/login/google.png)<br>
  <br><br>

## Add Chatroom

- The default of a new account will have no chatrooms. To use the app, the user has to create a chatroom first.
- ![logged in](readme/functions/login/signup2.png)<br>
- Press the add button next to chat.
- ![addbtn](readme/functions/addChat/addbtn.png)
- A prompt pops out. Type the chatroom name into prompt.
- ![add prompt](readme/functions/addChat/addprompt.png)
- The app will alert that the chatroom is created.
- ![add alert](readme/functions/addChat/addalert.png)
- Finished!
- ![finished](readme/functions/addChat/finished.png)
  <br><br>

## Send Messages

- To sent messages in a chatroom, user has to click on the chatrooms.
- ![chatrooms](readme/functions/sendMessage/chatbtn.png)
- If the user clicks on a chatroom, the small navigation bar will show the current chat located.
- ![click](readme/functions/sendMessage/click.png)
- Then type your message onto the message bar and press send.
- ![message](readme/functions/sendMessage/type.png)
- ![send](readme/functions/sendMessage/send.png)
- Send finished!
- ![finished](readme/functions/sendMessage/message.png)
- :anger: If the user does not click the chatroom before sending, the app will alert that the user cannot send messages here.
- ![no](readme/functions/sendMessage/no.png)
  <br><br>

## Add user to Chatroom

- To add user into chatroom, first press the add button.
- ![add btn](readme/functions/addUser/addbtn.png)
- A prompt will pop out. Type in the :exclamation: user's email :exclamation:.
- ![type email](readme/functions/addUser/adduserp.png)
- The user will be added.
- ![added](readme/functions/addUser/added.png) <br><br>
- Error conditions
- :anger: If the user has already been added. An alert message will pop out.
- ![duplicate](readme/functions/addUser/duplicate.png)
- :anger: If the user does not exist in the app(the user has not registered). An alert message will also pop out.
- ![dne](readme/functions/addUser/dne.png)
- Both conditions of the user will not be added to the chatroom.
  <br><br>

## Log out

- Simply click on the Log Out button located on the right top. The app will then alert bye. The user is logged out successfully.
- ![log out button](readme/functions/logOut_btn.png)
- ![alert](readme/functions/logout_alert.png)
  <br><br>

---

## Bonus Function description

- Profile/Change name function

1. Profile
   - On the left bottom part of the main panel is the profile. The profile shows the profile picture, name and the email of the user.
   - ![profile](readme/functions/more/profile.png)
2. Change name function
   - At the bottom of the profile, there is a button that can change the current user's name. The way to change name is easy.
   - Click on the "change name" button, then a prompt will pop out. Type the name user wanted to change the name.
   - Before changing the name
   - ![before change](readme/panel/main.png)
   - The change name button
   - ![change name button](readme/functions/more/change.png)
   - Click on the change name, a prompt will pop out.
   - ![change name prompt](readme/functions/more/changeprompt.png)
   - Type name, press enter in the prompt, and the name will be changed.
   - ![name changed](readme/functions/more/changed.png)

---

### Firebase page link

- [Your web page `URL`](https://assign2react.web.app)

---

### Others (Optional)

- I thought that props was hard but it was easier than I thought and surprisingly convenient.
- This assignment is harder than I thought. The main reason is that if the components are designed badly, things get messed up.
- Why are the firebase manuals sooooo messed up? Many of the functions are not so clearly explained or the examples cannot even run. Many examples tried pop error messages concerning that the function does not exist.

---

### Versions

| Version | Date       | Description                                |
| ------- | ---------- | ------------------------------------------ |
| 1       | 2024/04/14 | successfully deployed on firebase          |
| 2       | 2024/04/15 | login page finished                        |
| 3       | 2024/04/17 | panel css/ message format                  |
| 4       | 2024/04/19 | message/chatroom                           |
| 5       | 2024/04/20 | create chatrooms                           |
| 6       | 2024/04/21 | grab desginated data to user               |
| 7       | 2024/04/23 | add user                                   |
| 8       | 2024/04/27 | switch chatrooms                           |
| 9       | 2024/04/28 | alter switch chatroom method to pass props |
| 10      | 2024/04/28 | notification                               |
| 11      | 2024/04/29 | Profile                                    |
| 12      | 2024/04/29 | Change profile name                        |
| 13      | 2024/04/30 | Bug fix                                    |

<p align="right">--daisyliu0225</p>
