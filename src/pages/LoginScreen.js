
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authentication } from '../googlesignin/config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginScreen = () => {

    const navigate = useNavigate();

    const [logEmail, setEmail] = useState('');
    const [logPassword, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const { data } = await axios.get(`http://10.0.2.2:3000/Users/${logEmail}/${logPassword}`,) 
            if (data.status == 404) {
                alert('Invalid email/password')
                console.log('Incorrect');
                       
            } else {
                alert('Please sign in with your google account')
                console.log('Correct');
            }
        } catch (err) {
            console.log(err);
        }
    };
    
    const signInGoogle = () => {
        const provider = new GoogleAuthProvider;
        signInWithPopup(authentication, provider)
        .then((result)=>{
            const gEmail = result.user.email
            axios.put(`http://10.0.2.2:3000/Users/${gEmail}/${logEmail}`, )
            .then(response => {
                console.log('Success');
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }

    return (
        <div>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <div className='LoginBackground'>
                

                <div>
                    <h2>Welcome to Toggle!</h2>
                    <h4>Login Page</h4>
                    <p>Please login to your account below</p>
                </div>
                
                <div className='padding'>
                    <input 
                        className='inputprompt'
                        id="email"
                        value={logEmail}
                        placeholder="Email address"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        className='inputprompt'
                        id="password"
                        value={logPassword}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </div>

                <div>
                    <button className='forgotpasswordbutton'
                    onClick={() => {
                        navigate("/forgot-password"); }
                    }
                    >Forgot Password?
                    </button>
                </div>

                <div className='loginButton2'>
                    <button className='loginButton' onClick={handleSubmit} >Login </button>
                </div>
                
                <label className="registerlabel" for="registerbutton">Don't have an account? </label>
                
                <div className='register'>
                    <button className='registerbutton'
                    onClick={() => {
                        navigate("/register"); }
                    }
                    >Register
                    </button>    
                </div>

                <div className='padding'>
                    <button className='googlebutton' onClick={signInGoogle}>
                    <img className='googleImage' src={require('./google.png')}/>Continue with Google
                    </button>
                </div>
                <button className='buttons'>Back</button>
                
                
            </div>
        </div>
    );
};

export default LoginScreen;
