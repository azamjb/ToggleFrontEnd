
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email address');
      return;
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    } else if (password.length < 8 || !hasUpperCase || !hasLowerCase || !hasNumber) {
      setErrorMessage('Password must be at least 8 characters and include uppercase, lowercase, and number');
      return;
    } else {
      try {
        const data = await axios.post(`http://localhost:3000/Users/${email}/${password}`);
        console.log(data);
        setErrorMessage('');
        navigate('/login');
      } catch (err) {
        console.log(err);
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
        <h2>Welcome to Toggle!</h2>
        <h4>Register Page</h4>
        <p>Please enter details to create your account below</p>
      </div>
      <div className='padding'>
        <input className="inputprompt" type="email" value={email} placeholder='Email address' 
        onChange={e => setEmail(e.target.value)} /> 
      </div>
      <div className='padding'>
        <input className="inputprompt" type="password" value={password} placeholder='Password' 
        onChange={e => setPassword(e.target.value)} />
      </div>
      <div className='padding'>
        <input className="inputprompt" type="password" value={confirmPassword} placeholder='Confirm Password' 
        onChange={e => setConfirmPassword(e.target.value)} />
      </div>
      <div className='padding'>
        <p>{errorMessage}</p>
        <button className='registerbutton' onClick={handleSubmit}>Register</button>
      </div>

      <button className='registerbutton'>Back</button>
      
    </div>
  );
}

export default RegisterScreen;
