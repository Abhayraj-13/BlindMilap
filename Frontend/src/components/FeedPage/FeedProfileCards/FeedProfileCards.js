
import React, { useState, useEffect } from 'react';

function FeedProfileCards() {
  const [profile, setProfile] = useState(null);

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
    try {
      const response = await fetch('http://localhost:4000/send-friend-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: 'currentUserId', friendId: profile._id }), // Replace 'currentUserId' with the actual current user ID
      });

      if (response.ok) {
        alert('Friend request sent successfully!');
      } else {
        const errorData = await response.json();
        alert(`Failed to send friend request: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
      alert('Error sending friend request');
    }
  };

  useEffect(() => {
    fetchRandomProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-card">
      <img src={profile.profile_avatar} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <button onClick={handleSendFriendRequest}>Send Friend Request</button>
      <button onClick={fetchRandomProfile}>Find Next</button>
    </div>
  );
}

export default FeedProfileCards;
