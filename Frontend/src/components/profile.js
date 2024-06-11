import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./NavBar";

// mongodb+srv://supermanhappyvy:Byasyadav1*@cluster0.9nm1yqx.mongodb.net/


function CollectProfile() {
return(
    <div>
    
    <div className="book-container">
        <h1>Create Your Profile</h1>
        <div className="book-fields">
          <h3>Name</h3>
          <input name='name' value={bookdata.name} onChange={changeHandle} type="text" placeholder='Type Here' required />
          <h3>Gender</h3>
          <input name='gender' value={bookdata.gender} onChange={changeHandle} type="text" placeholder='Type Here' required />
          <h3>Year of Study</h3>
          <input name='year_of_study' value={bookdata.year_of_study} onChange={changeHandle} type="text" placeholder='Type Here' required />
          <h3>Phone Number</h3>
          <input name='phone' value={bookdata.phone} onChange={changeHandle} type="text" placeholder='Type Here' required />
          <h3>Age</h3>
          <input name='age' value={bookdata.age} onChange={changeHandle} type="text" placeholder='Type Here' required />
          <h3>Bio</h3>
          <input name='name' value={bookdata.bio} onChange={changeHandle} type="text" placeholder='Type Here' required />
        </div>
        <button >Create</button>
      </div>

    </div>
)
}
export default CollectProfile;