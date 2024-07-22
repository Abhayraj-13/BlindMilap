// import React from "react";

// import { auth } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// const Message = ({ message }) => {
//   const [user] = useAuthState(auth);

//   return (
//     <div
//       className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
//       <img
//         className="chat-bubble__left"
//         src={message.avatar}
//         alt="user avatar"
//       />
//       <div className="chat-bubble__right">
//         <p className="user-name">{message.name}</p>
//         <p className="user-message">{message.text}</p>
//       </div>
//     </div>
//   );
// };

// export default Message;




import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Message = ({ scroll, chatroomId }) => {
  const [msg, setMsg] = useState("");
  const auth = getAuth();

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;
    
    await addDoc(collection(db, "messages"), {
      text: msg,
      name: displayName,
      uid,
      createdAt: Timestamp.fromDate(new Date()),
      chatroomId, // Associate message with chatroomId
    });

    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={sendMessage} className="send-message">
      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type your message here..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Message;