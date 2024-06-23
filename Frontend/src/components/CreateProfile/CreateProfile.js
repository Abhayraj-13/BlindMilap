import React, { useState } from 'react';
import './CreateProfile.css';
import AvatarGenerator from '../AvatarComponent/AvatarComponent';
import FeedProfileCards from '../FeedPage/FeedProfileCards/FeedProfileCards';
import NavBar from '../NavBar';
import { navigate } from 'react-router-dom';
import { auth, GoogleAuthProvider, signOut } from "../../firebase";

import Login from '../Login/login';

const CreateProfile = () => {
const [formData, setFormData] = useState({
name: '',
gender: '',
yearOfStudy: '',
phoneNumber: '',
age: '',
favouritePlaceInCampus: '',
bio: '',
});

const [showAvatar, setShowAvatar] = useState(false);

const [showFeed, setShowFeed] = useState(true);
const [showProfileCard, setShowProfileCard] = useState(false); // Add state to control rendering of CreateProfileCard

const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};


//changes
const handleSignOut = () => {
  signOut(auth);
};



const handleNext = (e) => {
e.preventDefault();
setShowAvatar(true);
};

const handleAvatarSubmit = async (avatarUrl) => {
const combinedData = { ...formData, profile_avatar: avatarUrl };
console.log('Submitting:', combinedData);

try {
  const response = await fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(combinedData),
  });
  if (response.ok) {
    const user = await response.json();
    console.log('User:', user);
    alert(`User added successfully! Your username is: ${user.username}`);
    setFormData({
      name: '',
      gender: '',
      yearOfStudy: '',
      phoneNumber: '',
      age: '',
      favouritePlaceInCampus: '',
      bio: '',
    });
    setShowAvatar(false);
    setShowFeed(false);
    handleSignOut();
    setShowProfileCard(true); // Show CreateProfileCard component
  } else {
    const errorData = await response.json();
    console.error('Failed to add user:', errorData);
    alert(`Failed to add user: ${errorData.message}`);
  }
} catch (error) {
  console.error('Error:', error);
  alert('Error adding user');
}
};

return (
<div className="form-container">
<NavBar/>
{!showAvatar && !showProfileCard ? (
<form onSubmit={handleNext}>
<h1>Create Your Profile</h1>
<label>
Name:
<input type="text" name="name" value={formData.name} onChange={handleChange} required />
</label>
<label>
Gender:
<select name="gender" value={formData.gender} onChange={handleChange} required>
<option value="">Select</option>
<option value="Male">Male</option>
<option value="Female">Female</option>
<option value="Other">Other</option>
</select>
</label>
<label>
Year of Study:
<input type="number" name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} required />
</label>
<label>
Phone Number:
<input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
</label>
<label>
Age:
<input type="number" name="age" value={formData.age} onChange={handleChange} required />
</label>
<label>
Favourite Place in Campus:
<input type="text" name="favouritePlaceInCampus" value={formData.favouritePlaceInCampus} onChange={handleChange} />
</label>
<label>
Bio:
<textarea name="bio" value={formData.bio} onChange={handleChange} />
</label>
<button type="submit">Next</button>
</form>
) : showAvatar ? (
<AvatarGenerator onSubmit={handleAvatarSubmit} />
) : (
showProfileCard && <Login />
)}
</div>
);
};

export default CreateProfile;