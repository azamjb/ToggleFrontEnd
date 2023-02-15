
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ResetPassword from './ResetPassword';

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const [code, setCode] = useState(generateRandomNumber());
  const [enteredCode, setEnteredCode] = useState('');

  function generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  } 

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/PWreset/${email}/${code}`);
      alert('Code sent successfully');
    } catch (error) {
      alert('Error: An error occurred. Please try again later.');
    }
  };

  const handleCheckCode = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/PWreset/${code}`);
      if (data.status == 404) {
        alert('Invalid Code');
      } else if (Number(enteredCode) === code) {
        alert('Correct');
        navigate('/reset-password', { state: { email: email }});
      } else {
        alert('Incorrect Code');
      }
    } catch (err) {
      console.log(err);
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
      <h2>Account Verification</h2>
      <p>Please enter your email to receive a reset code:</p>
      </div>
      <div className='padding'>
        <input 
          className='inputprompt'
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          autoComplete="email"
          required
        />
      </div>
      <div className='padding'>
        <button className='buttons' onClick={handleSubmit}>Send reset code</button>
      </div>
      <div>
      <p>Enter the code to reset your password:</p>
      </div>
      <div className='padding'>
        <input 
          className='inputprompt'
          type="number"
          value={enteredCode}
          onChange={(event) => setEnteredCode(event.target.value)}
          placeholder="Reset Code"
          required
        />
      </div>
      <div className='padding'>
      <button className='buttons' onClick={handleCheckCode}>Check code</button>
      </div>
      <button className='buttons'>Back</button>
      
    </div>
    
  );
}

export default ForgotPassword;
