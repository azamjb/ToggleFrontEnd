
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ResetPassword = ({ email }) => {

  const location = useLocation();
  console.log(location);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const handleSubmit = async () => {

    if (password !== newPassword) {
      alert('Passwords do not match');
      return;
    } else if (password.length < 8 || !hasUpperCase || !hasLowerCase || !hasNumber) {
      alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number');
      return;
    } else {
      try {
        const response = await axios.put(`http://10.0.2.2:3000/Users/${email}/${password}`);

        if (response.status === 200) {
          alert('Password successfully changed!');
        } else {
          alert('Something went wrong, please try again later');
        }
      } catch (error) {
        console.error(error);
        alert('Something went wrong, please try again later');
      }
    }
  };

  return (

    <div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div>
        <h2>Password Reset</h2>
        <p>Please enter your new password</p>
      </div>
      <div className='padding'>
        <input 
          className='inputprompt'
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="New Password"
        />
      </div>
      <div className='padding'>
        <input
          className='inputprompt'
          type="password"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          placeholder="Confirm Password"
        />
      </div>
      <div className='padding'>
        <button className='buttons' onClick={handleSubmit}>Change Password</button>
      </div>
      <div>
        <button className='buttons' >Back</button>
      </div>
      
      
    </div>
  );
};

export default ResetPassword;
