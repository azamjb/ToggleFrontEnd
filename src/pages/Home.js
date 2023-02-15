import '../css/main.css';
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>  {

    const navigate = useNavigate();

    return (
    <div className="center-image">
        <img 
        style={{
          height: 102,
          width: 102,
        }}
        src={require('./logo.png')}/>
        <div>

          <div>
            <button type="button" 
            onClick={() => {
              navigate("/login"); }
            }
              className="login_button">
            Login
          </button>
          <div>
            <button type="button" 
            onClick={() => {
              navigate("/register"); }
            }
            className="signup_button">
            Register
          </button>
          </div>
  
      
      </div>
    

    </div>
      <div className='Welcome-message' >Welcome to Toggle!</div>
    </div>
    
  );

}

export default Home;