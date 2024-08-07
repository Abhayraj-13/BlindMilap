// // import React from "react";
// import React, { useState } from "react";
// import { auth, db } from "../firebase";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// const SendMessage = () => {
//   const [message, setMessage] = useState("");

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === "") {
//       alert("Enter valid message");
//       return;
//     }
//     const { uid, displayName, photoURL } = auth.currentUser;
//     await addDoc(collection(db, "messages"), {
//       text: message,
//       name: displayName,
//       avatar: photoURL,
//       createdAt: serverTimestamp(),
//       uid,
//     });
//     setMessage("");
//     // scroll.current.scrollIntoView({ behavior: "smooth" });
//   };
  
//   return (
//     <form onSubmit={(event) => sendMessage(event)} className="send-message">
      

  
//       <label htmlFor="messageInput" hidden>
//         Enter Message
//       </label>
//       <input
//         id="messageInput"
//         name="messageInput"
//         type="text"
//         className="form-input__input"
//         placeholder="type message..."
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// };


// export default SendMessage;
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ chatroomId }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "chatrooms", chatroomId, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    // scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;
