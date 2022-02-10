import React from 'react';
import TopHeader from './TopHeader';
import Footer from './Footer.js'
import '../Style/Register.css'
import DataField  from './DataField';

function Register() {
  return(
    <>
    <TopHeader />
    <div className="main_container">
        <div className="back_form">
           <div className = "headline"><h2>User Registration</h2></div>
           <form className = "main_body" type="submit">
                <div className="first">
                    <DataField name="Name"/>
                    <DataField name="Designation"/>
                    <DataField name="Email"/>
                    <DataField name="Line"/>
                    <DataField name="Join Date" type = "date"/>
                    <DataField name="Add Resume" type="file"/>
                </div>
                <div className="second">
                    <DataField name="Graduation Year" type="digit"/>
                    <DataField name="Institution"/>
                    <DataField name="Extra Curricular Interest"/>
                    <DataField name="Degree"/>
                    <DataField name="Add Photo" type="file"/>
                    <DataField name="Add Bio" type="file"/>
                </div>
            </form>
            <div className = "button_area">
                <button className='create_user' type='submit'>Create User</button>
            </div>
         </div>           
        </div>
     <Footer />	
    </>
  );
}

export default Register;
