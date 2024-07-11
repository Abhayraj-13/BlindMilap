

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
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
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, CheckCircle as CheckCircleIcon, Cancel as CancelIcon } from '@mui/icons-material';

const drawerWidth = 240;

function FeedProfileCards() {
  const [profile, setProfile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleSendFriendRequest = async () => {
   
  };

  useEffect(() => {
    fetchRandomProfile();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsSidebarOpen(true)}
            edge="start"
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}
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
            {['Feed', 'Chats', 'Notifications', 'Profile', 'Rate App'].map((text, index) => (
              <ListItem button key={text}>
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
          {['Feed', 'Chats', 'Notifications', 'Profile', 'Rate App'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
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






