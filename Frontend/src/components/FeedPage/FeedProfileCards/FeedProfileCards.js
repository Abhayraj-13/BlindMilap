

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
import { getAuth } from "firebase/auth"; // Import getAuth from firebase

const drawerWidth = 240;

function FeedProfileCards() {
  const [profile, setProfile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false); // State to manage notifications drawer
  const [currentUserUid, setCurrentUserUid] = useState(null);
  const [notifications, setNotifications] = useState([]); // State to store notifications

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserUid(user.uid);
      }
    });
  }, []);

  const fetchRandomProfile = async () => {
    try {
      const response = await fetch('http://localhost:4000/random-profile');
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched Profile:', data); // Log the profile object
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
        console.log('Fetched Notifications:', data); // Log notifications
        setNotifications(data);
      } else {
        console.error('Failed to fetch notifications');
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    fetchRandomProfile();
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [currentUserUid]);

  const handleSendFriendRequest = async () => {
    if (!currentUserUid || !profile) {
      console.error('User UID or profile is missing');
      return;
    }

    console.log('Sending Friend Request from:', currentUserUid, 'to:', profile.uid); // Log UIDs

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
        // Update state to reflect changes
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
        // Update state to reflect changes
        fetchNotifications();
      } else {
        const errorData = await response.json();
        console.error('Failed to reject friend request:', errorData);
      }
    } catch (error) {
      console.error('Error rejecting friend request:', error);
    }
  };

  const toggleNotificationsDrawer = (open) => () => {
    setNotificationsOpen(open);
    if (open) {
      fetchNotifications();
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
            {['Feed', 'Chats', 'Notifications', 'Profile', 'Rate App'].map((text) => (
              <ListItem button key={text} onClick={text === 'Notifications' ? toggleNotificationsDrawer(true) : null}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
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
          {['Feed', 'Chats', 'Notifications', 'Profile', 'Rate App'].map((text) => (
            <ListItem button key={text} onClick={text === 'Notifications' ? toggleNotificationsDrawer(true) : null}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Drawer
        anchor="right"
        open={notificationsOpen}
        onClose={toggleNotificationsDrawer(false)}
      >
        <Box sx={{ width: 300, p: 2 }}>
          <IconButton onClick={toggleNotificationsDrawer(false)} sx={{ marginBottom: 2 }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">Notifications</Typography>
          <Divider />
          {notifications.length === 0 ? (
            <Typography variant="body1">No notifications</Typography>
          ) : (
            notifications.map((notification) => (
              <Box key={notification._id} sx={{ marginTop: 2 }}>
                <Typography variant="body2">{notification.message}</Typography>
                {notification.type === 'friend_request' && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
                    <Button variant="contained" color="primary" onClick={() => handleAccept(notification.requesterUid)}>
                      Accept
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleReject(notification.requesterUid)}>
                      Reject
                    </Button>
                  </Box>
                )}
              </Box>
            ))
          )}
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {profile ? (
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
              component="img"
              height="140"
              image={profile.profile_avatar}
              alt="profile avatar"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profile.bio}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
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
            </Box>
          </Card>
        ) : (
          <Typography variant="h6" color="text.primary">
            Loading...
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default FeedProfileCards;
