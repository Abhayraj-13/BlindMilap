import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { auth } from '../../firebase'; // Ensure you have auth setup for getting current user ID

function FriendRequests() {
  const [friendRequests, setFriendRequests] = useState([]);

  const fetchFriendRequests = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.error('User not authenticated');
        return;
      }

      const response = await fetch(`http://localhost:4000/user/${currentUser.uid}/friend-requests`);
      if (response.ok) {
        const data = await response.json();
        setFriendRequests(data);
      } else {
        console.error('Failed to fetch friend requests');
      }
    } catch (error) {
      console.error('Error fetching friend requests:', error);
    }
  };

  const handleAccept = async (friendId) => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.error('User not authenticated');
        return;
      }

      const response = await fetch('http://localhost:4000/accept-friend-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: currentUser.uid, friendId }),
      });

      if (response.ok) {
        fetchFriendRequests();
      } else {
        console.error('Failed to accept friend request');
      }
    } catch (error) {
      console.error('Error accepting friend request:', error);
    }
  };

  const handleReject = async (friendId) => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.error('User not authenticated');
        return;
      }

      const response = await fetch('http://localhost:4000/reject-friend-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: currentUser.uid, friendId }),
      });

      if (response.ok) {
        fetchFriendRequests();
      } else {
        console.error('Failed to reject friend request');
      }
    } catch (error) {
      console.error('Error rejecting friend request:', error);
    }
  };

  useEffect(() => {
    fetchFriendRequests();
  }, []);

  return (
    <List>
      {friendRequests.map((request) => (
        <ListItem key={request._id}>
          <ListItemText primary={request.name} />
          <Button onClick={() => handleAccept(request._id)}>Accept</Button>
          <Button onClick={() => handleReject(request._id)}>Reject</Button>
        </ListItem>
      ))}
    </List>
  );
}

export default FriendRequests;
