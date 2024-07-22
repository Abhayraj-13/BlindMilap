

// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Box,
//   CssBaseline,
// } from '@mui/material';
// import { Menu as MenuIcon, Close as CloseIcon, CheckCircle as CheckCircleIcon, Cancel as CancelIcon } from '@mui/icons-material';

// const drawerWidth = 240;

// function FeedProfileCards() {
//   const [profile, setProfile] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const fetchRandomProfile = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/random-profile');
//       if (response.ok) {
//         const data = await response.json();
//         setProfile(data);
//       } else {
//         console.error('Failed to fetch profile');
//       }
//     } catch (error) {
//       console.error('Error fetching profile:', error);
//     }
//   };

//   const handleSendFriendRequest = async () => {
   
//   };

//   useEffect(() => {
//     fetchRandomProfile();
//   }, []);

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           {/* <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={() => setIsSidebarOpen(true)}
//             edge="start"
//             sx={{ mr: 2, display: { md: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton> */}
//           <Typography variant="h6" noWrap component="div">
//             Feed Profile Cards
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           display: { xs: 'none', md: 'block' },
//           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//         }}
//         open
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'auto' }}>
//           <List>
//             {['Feed', 'Chats', 'Notifications', 'Profile', 'Rate App'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//       <Drawer
//         variant="temporary"
//         open={isSidebarOpen}
//         onClose={() => setIsSidebarOpen(false)}
//         ModalProps={{
//           keepMounted: true,
//         }}
//         sx={{
//           display: { xs: 'block', md: 'none' },
//           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//         }}
//       >
//         <IconButton onClick={() => setIsSidebarOpen(false)} sx={{ margin: 1 }}>
//           <CloseIcon />
//         </IconButton>
//         <List>
//           {['Feed', 'Chats', 'Notifications', 'Profile', 'Rate App'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
//         {profile ? (
//           <Card sx={{ maxWidth: 345, margin: 'auto' }}>
//             <CardMedia
//               component="img"
//               height="140"
//               image={profile.profile_avatar}
//               alt="profile avatar"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {profile.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {profile.bio}
//               </Typography>
//             </CardContent>
//             <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 startIcon={<CheckCircleIcon />}
//                 onClick={handleSendFriendRequest}
//                 sx={{ marginRight: 1 }}
//               >
//                 Send Request
//               </Button>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 startIcon={<CancelIcon />}
//                 onClick={fetchRandomProfile}
//               >
//                 Next Profile
//               </Button>
//             </Box>
//           </Card>
//         ) : (
//           <Typography variant="h6" color="text.primary">
//             Loading...
//           </Typography>
//         )}
//       </Box>
//     </Box>
//   );
// }

// export default FeedProfileCards;


// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Box,
//   CssBaseline,
// } from '@mui/material';
// import { CheckCircle as CheckCircleIcon, Cancel as CancelIcon } from '@mui/icons-material';
// import { getAuth } from "firebase/auth"; // Import getAuth from firebase

// const drawerWidth = 240;

// function FeedProfileCards() {
//   const [profile, setProfile] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [currentUserUid, setCurrentUserUid] = useState(null);

//   useEffect(() => {
//     const auth = getAuth();
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         setCurrentUserUid(user.uid);
//       }
//     });
//   }, []);

//   const Notifications = ({ notifications, handleAccept, handleReject }) => {
//     return (
//       <div>
//         {notifications.map(notification => (
//           <div key={notification._id}>
//             <p>{notification.message}</p>
//             {notification.type === 'friend_request' && (
//               <div>
//                 <button onClick={() => handleAccept(notification.requesterUid)}>Accept</button>
//                 <button onClick={() => handleReject(notification.requesterUid)}>Reject</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   const fetchRandomProfile = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/random-profile');
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Fetched Profile:', data); // Log the profile object
//         setProfile(data);
//       } else {
//         console.error('Failed to fetch profile');
//       }
//     } catch (error) {
//       console.error('Error fetching profile:', error);
//     }
//   };

//   const handleSendFriendRequest = async () => {
//     if (!currentUserUid || !profile) {
//       console.error('User UID or profile is missing');
//       return;
//     }
  
//     console.log('Sending Friend Request from:', currentUserUid, 'to:', profile.uid); // Log UIDs
  
//     try {
//       const response = await fetch('http://localhost:4000/send-friend-request', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           requesterUid: currentUserUid,
//           recipientUid: profile.uid,
//         }),
//       });
  
//       if (response.ok) {
//         const result = await response.json();
//         console.log('Friend request sent:', result);
//       } else {
//         const errorData = await response.json();
//         console.error('Failed to send friend request:', errorData);
//       }
//     } catch (error) {
//       console.error('Error sending friend request:', error);
//     }
//   };
//   const handleAccept = async (requesterUid) => {
//     try {
//       const response = await fetch('http://localhost:4000/accept-friend-request', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           requesterUid,
//           recipientUid: currentUserUid,
//         }),
//       });
  
//       if (response.ok) {
//         const result = await response.json();
//         console.log('Friend request accepted:', result);
//         // Update state to reflect changes
//       } else {
//         const errorData = await response.json();
//         console.error('Failed to accept friend request:', errorData);
//       }
//     } catch (error) {
//       console.error('Error accepting friend request:', error);
//     }
//   };
  
//   const handleReject = async (requesterUid) => {
//     try {
//       const response = await fetch('http://localhost:4000/reject-friend-request', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           requesterUid,
//           recipientUid: currentUserUid,
//         }),
//       });
  
//       if (response.ok) {
//         const result = await response.json();
//         console.log('Friend request rejected:', result);
//         // Update state to reflect changes
//       } else {
//         const errorData = await response.json();
//         console.error('Failed to reject friend request:', errorData);
//       }
//     } catch (error) {
//       console.error('Error rejecting friend request:', error);
//     }
//   };
  

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/notifications/${currentUserUid}`);
//         if (response.ok) {
//           const notifications = await response.json();
//           setNotifications(notifications);
//         } else {
//           console.error('Failed to fetch notifications');
//         }
//       } catch (error) {
//         console.error('Error fetching notifications:', error);
//       }
//     };
  
//     fetchNotifications();
//   }, [currentUserUid]);
  
//   useEffect(() => {
//     fetchRandomProfile();
//   }, []);

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Feed Profile Cards
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           display: { xs: 'none', md: 'block' },
//           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//         }}
//         open
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'auto' }}>
//           <List>
//             {['Feed', 'Chats', 'Notifications', 'Profile', 'Rate App'].map((text) => (
//               <ListItem button key={text}>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//       <Drawer
//         variant="temporary"
//         open={isSidebarOpen}
//         onClose={() => setIsSidebarOpen(false)}
//         ModalProps={{
//           keepMounted: true,
//         }}
//         sx={{
//           display: { xs: 'block', md: 'none' },
//           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//         }}
//       >
//         <List>
//           {['Feed', 'Chats', 'Notifications', 'Profile', 'Rate App'].map((text) => (
//             <ListItem button key={text}>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
//         {profile ? (
//           <Card sx={{ maxWidth: 345, margin: 'auto' }}>
//             <CardMedia
//               component="img"
//               height="140"
//               image={profile.profile_avatar}
//               alt="profile avatar"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {profile.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {profile.bio}
//               </Typography>
//             </CardContent>
//             <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 startIcon={<CheckCircleIcon />}
//                 onClick={handleSendFriendRequest}
//                 sx={{ marginRight: 1 }}
//               >
//                 Send Request
//               </Button>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 startIcon={<CancelIcon />}
//                 onClick={fetchRandomProfile}
//               >
//                 Next Profile
//               </Button>
//             </Box>
//           </Card>
//         ) : (
//           <Typography variant="h6" color="text.primary">
//             Loading...
//           </Typography>
//         )}
//       </Box>
//     </Box>
//   );
// }

// export default FeedProfileCards;

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  CssBaseline,
  IconButton,
  Divider,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon, Cancel as CancelIcon, Close as CloseIcon } from '@mui/icons-material';
import { getAuth } from "firebase/auth";
import { db } from "../../../firebase"; // Import Firestore instance
import { collection, addDoc, query, where, getDocs, serverTimestamp } from "firebase/firestore";
import ChatBox from "../../ChatBox"; // Import ChatBox component
import SendMessage from '../../SendMessage'; // Import SendMessage component

const drawerWidth = 240;

function FeedProfileCards() {
  const [profile, setProfile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [friendsOpen, setFriendsOpen] = useState(false);
  const [currentUserUid, setCurrentUserUid] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [chatrooms, setChatrooms] = useState([]);
  const [friends, setFriends] = useState([]);
  const [currentChatroomId, setCurrentChatroomId] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserUid(user.uid);
        fetchChatrooms(user.uid); // Fetch chatrooms when user is authenticated
      }
    });
  }, []);

  const fetchRandomProfile = async () => {
    try {
      const response = await fetch('http://localhost:4000/random-profile');
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      } else {
        console.error('Failed to fetch profile');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const fetchNotifications = async () => {
    if (!currentUserUid) return;

    try {
      const response = await fetch(`http://localhost:4000/notifications/${currentUserUid}`);
      if (response.ok) {
        const data = await response.json();
        setNotifications(data);
      } else {
        console.error('Failed to fetch notifications');
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const fetchFriends = async () => {
    if (!currentUserUid) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/friends/${currentUserUid}`);
      if (response.ok) {
        const friendsList = await response.json();
        setFriends(friendsList);
      } else {
        console.error('Failed to fetch friends');
      }
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };

  const fetchChatrooms = async (userUid) => {
    const q = query(collection(db, "chatrooms"), where("users", "array-contains", userUid));
    const querySnapshot = await getDocs(q);
    const rooms = [];
    querySnapshot.forEach((doc) => {
      rooms.push({ ...doc.data(), id: doc.id });
    });
    setChatrooms(rooms);
  };

  useEffect(() => {
    fetchRandomProfile();
  }, []);

  useEffect(() => {
    fetchNotifications();
    fetchFriends();
  }, [currentUserUid]);

  const handleSendFriendRequest = async () => {
    if (!currentUserUid || !profile) {
      console.error('User UID or profile is missing');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/send-friend-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requesterUid: currentUserUid,
          recipientUid: profile.uid,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Friend request sent:', result);
      } else {
        const errorData = await response.json();
        console.error('Failed to send friend request:', errorData);
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

  const handleAccept = async (requesterUid) => {
    try {
      const response = await fetch('http://localhost:4000/accept-friend-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requesterUid,
          recipientUid: currentUserUid,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Friend request accepted:', result);
        createChatroom(requesterUid, currentUserUid); // Create chatroom when friend request is accepted
        fetchNotifications();
      } else {
        const errorData = await response.json();
        console.error('Failed to accept friend request:', errorData);
      }
    } catch (error) {
      console.error('Error accepting friend request:', error);
    }
  };

  const handleReject = async (requesterUid) => {
    try {
      const response = await fetch('http://localhost:4000/reject-friend-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requesterUid,
          recipientUid: currentUserUid,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Friend request rejected:', result);
        fetchNotifications();
      } else {
        const errorData = await response.json();
        console.error('Failed to reject friend request:', errorData);
      }
    } catch (error) {
      console.error('Error rejecting friend request:', error);
    }
  };

  const createChatroom = async (user1Uid, user2Uid) => {
    try {
      const docRef = await addDoc(collection(db, "chatrooms"), {
        users: [user1Uid, user2Uid],
        createdAt: serverTimestamp(),
      });
      console.log("Chatroom created with ID: ", docRef.id);
      fetchChatrooms(currentUserUid); // Refresh chatrooms after creation
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const toggleNotificationsDrawer = (open) => () => {
    setNotificationsOpen(open);
    if (open) {
      fetchNotifications();
    }
  };

  const toggleFriendsDrawer = (open) => () => {
    setFriendsOpen(open);
    if (open) {
      fetchFriends();
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Feed Profile Cards
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Feed', 'Chats', 'Notifications', 'Friends', 'Profile', 'Rate App'].map((text) => (
              <ListItem button key={text} onClick={text === 'Chats' ? () => setCurrentChatroomId(null) : text === 'Notifications' ? toggleNotificationsDrawer(true) : text === 'Friends' ? toggleFriendsDrawer(true) : null}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          {chatrooms.map((chatroom) => (
            <ListItem button key={chatroom.id} onClick={() => setCurrentChatroomId(chatroom.id)}>
              <ListItemText primary={`Chat with ${chatroom.users.find(uid => uid !== currentUserUid)}`} />
            </ListItem>
          ))}
        </Box>
      </Drawer>
      <Drawer
        variant="temporary"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <IconButton onClick={() => setIsSidebarOpen(false)} sx={{ margin: 1 }}>
          <CloseIcon />
        </IconButton>
        <List>
          {['Feed', 'Chats', 'Notifications', 'Friends', 'Profile', 'Rate App'].map((text) => (
            <ListItem button key={text} onClick={text === 'Chats' ? () => setCurrentChatroomId(null) : text === 'Notifications' ? toggleNotificationsDrawer(true) : text === 'Friends' ? toggleFriendsDrawer(true) : null}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {chatrooms.map((chatroom) => (
          <ListItem button key={chatroom.id} onClick={() => setCurrentChatroomId(chatroom.id)}>
            <ListItemText primary={`Chat with ${chatroom.users.find(uid => uid !== currentUserUid)}`} />
          </ListItem>
        ))}
      </Drawer>
      <Drawer
        anchor="right"
        open={notificationsOpen}
        onClose={toggleNotificationsDrawer(false)}
      >
        <Box sx={{ width: 300 }}>
          <IconButton onClick={toggleNotificationsDrawer(false)} sx={{ margin: 1 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {notifications.map((notification, index) => (
              <ListItem key={index}>
                <ListItemText primary={`Friend request from ${notification.requesterName}`} />
                <IconButton onClick={() => handleAccept(notification.requesterUid)}>
                  <CheckCircleIcon />
                </IconButton>
                <IconButton onClick={() => handleReject(notification.requesterUid)}>
                  <CancelIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      {/* <Drawer
        anchor="right"
        open={friendsOpen}
        onClose={toggleFriendsDrawer(false)}
      >
        <Box sx={{ width: 300 }}>
          <IconButton onClick={toggleFriendsDrawer(false)} sx={{ margin: 1 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {friends.map((friend, index) => (
              <ListItem key={index}>
                <ListItemText primary={friend.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer> */}

      <Drawer
        anchor="right"
        open={friendsOpen}
        onClose={toggleFriendsDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">Friends</Typography>
          {friends.map(friend => (
            <Box key={friend.uid} sx={{ margin: 1 }}>
              <Card sx={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 64, height: 64, borderRadius: '50%' }}
                  image={friend.profile_avatar}
                  alt="friend avatar"
                />
                <CardContent>
                  <Typography variant="h6">{friend.username}</Typography>
                  <Typography variant="body2" color="text.secondary">{friend.bio}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {currentChatroomId ? (
          <Box>
            <ChatBox chatroomId={currentChatroomId} />
            <SendMessage chatroomId={currentChatroomId} />
          </Box>
        ) : (
          <Box>
            {profile ? (
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={profile.profile_avatar}
                  alt={profile.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {profile.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {profile.bio}
                  </Typography>
                </CardContent>
                {/* <Button onClick={handleSendFriendRequest}>Send Friend Request</Button> */}
                <Button
                variant="contained"
                color="primary"
                startIcon={<CheckCircleIcon />}
                onClick={handleSendFriendRequest}
                sx={{ marginRight: 1 }}
              >
                Send Request
              </Button>
                <Button
                variant="contained"
                color="secondary"
                startIcon={<CancelIcon />}
                onClick={fetchRandomProfile}
              >
                Next Profile
              </Button>
              </Card>
            ) : (
              <Typography variant="h6">No profile available</Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default FeedProfileCards;
