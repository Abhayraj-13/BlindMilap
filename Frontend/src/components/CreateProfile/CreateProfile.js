import React, { useState } from 'react';
import './CreateProfile.css';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    yearOfStudy: '',
    phoneNumber: '',
    age: '',
    favouritePlaceInCampus: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit the form data to the FastAPI server and receive the generated username
      const response = await fetch('http://localhost:8000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      // Alert the user with the generated username
      const generatedUsername = data.username;
      alert(`Your generated username is: ${generatedUsername}`);

      if (response.ok) {
        alert('User added successfully!');
        setFormData({
          name: '',
          gender: '',
          yearOfStudy: '',
          phoneNumber: '',
          age: '',
          favouritePlaceInCampus: '',
          bio: ''
        });
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
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProfile;
