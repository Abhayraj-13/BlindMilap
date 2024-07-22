// import React from "react";
// import Message from "./Message";
// import SendMessage from "./SendMessage";
// import { useEffect, useRef, useState } from "react";
// import {
//   query,
//   collection,
//   orderBy,
//   onSnapshot,
//   limit,
// } from "firebase/firestore";
// import { db } from "../firebase";

// const ChatBox = () => {
//   const [messages, setMessages] = useState([]);
//   const scroll = useRef();

//   useEffect(() => {
//     const q = query(
//       collection(db, "messages"),
//       orderBy("createdAt", "desc"),
//       limit(50)
//     );
//     const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
//       const fetchedMessages = [];
//       QuerySnapshot.forEach((doc) => {
//         fetchedMessages.push({ ...doc.data(), id: doc.id });
//       });
//       const sortedMessages = fetchedMessages.sort(
//         (a, b) => a.createdAt - b.createdAt
//       );
//       setMessages(sortedMessages);
//     });
//     return () => unsubscribe;
//   }, []);

//   return (
//     <main className="chat-box">
//       <div className="messages-wrapper">
//       {messages?.map((message) => (
//   <Message key={message.id} message={message} />
// ))}
//       </div>
//       <span ref={scroll}></span>
//       <SendMessage scroll={scroll} />
//     </main>
//   );
// };

// export default ChatBox;/




// import React, { useEffect, useRef, useState } from "react";
// import Message from "./Message";
// import SendMessage from "./SendMessage";
// import { query, collection, orderBy, onSnapshot, where } from "firebase/firestore";
// import { db } from "../firebase";

// const ChatBox = ({ chatroomId }) => {
//   const [messages, setMessages] = useState([]);
//   const scroll = useRef();

//   useEffect(() => {
//     if (!chatroomId) return;

//     const q = query(
//       collection(db, "messages"),
//       where("chatroomId", "==", chatroomId),
//       orderBy("createdAt", "asc")
//     );

//     const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
//       const fetchedMessages = [];
//       QuerySnapshot.forEach((doc) => {
//         fetchedMessages.push({ ...doc.data(), id: doc.id });
//       });
//       setMessages(fetchedMessages);
//     });

//     return () => unsubscribe();
//   }, [chatroomId]);

//   return (
//     <main className="chat-box">
//       <div className="messages-wrapper">
//         {messages?.map((message) => (
//           <Message key={message.id} message={message} />
//         ))}
//       </div>
//       <span ref={scroll}></span>
//       <SendMessage scroll={scroll} chatroomId={chatroomId} />
//     </main>
//   );
// };

// export default ChatBox;

import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const ChatBox = ({ chatroomId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'chatrooms', chatroomId, 'messages'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
      });
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [chatroomId]);

  return (
    <div className="chat-box">
      {messages.map((message) => (
        <div key={message.id} className="message">
          <img src={message.avatar} alt={message.name} />
          <div>
            <div>{message.name}</div>
            <div>{message.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
