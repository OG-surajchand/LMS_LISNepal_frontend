import React, { useEffect, useState } from 'react';
import TopHeader from './TopHeader';
import Footer from './Footer.js';
function Login() {

    const [name, setname] = useState('');
    const [pass, setpass] = useState('');
    const [didforgot, setdidforgot] = useState(false);

  return(   
      <>
      <div className="login-container">
      <TopHeader />
      <div className="login-form">
      <form action="submit">
        <div className="form-header">Login to LMS</div>
        <div className="form-data">
          <input type="text" className='name' placeholder='Username' onChange={(e)=>{setname(e.target.value)}}/>
          <input type="password" className='password' placeholder='Password' onChange={(e)=>{setpass(e.target.value)}}/>
        </div>
        <div className="form-bot">
            <div className='forgot'><input type="checkbox" onClick={(e)=> {setdidforgot(!didforgot)}}/>
            <label>Forgot your password?</label></div>
            <button type='submit' className='form-button'>Login</button>
        </div>
        <div className="forgot-area">
        {useEffect((e)=>{
            if(didforgot == true){
                console.log("True")
            }
            else 
                console.log("False")
        })}
        </div>
      </form>
    </div>
      <Footer />
    </div>
      </>
  );
}

export default Login;
