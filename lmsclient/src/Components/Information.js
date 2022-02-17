import React, { useState } from "react";
import "../Style/Pages.css";

function Information() {
  const [userdata, setuserdata] = useState({
    first_name: "Suraj",
    middle_name: "Bdr.",
    last_name: "Chand",
    designation: "Intern",
    line: "Development Services",
    line_division: "",
    join_date: "02-02-2022",
    degree: "BE",
    graduation_year: 2022,
    institution: "KEC",
    eci: "Sports, Movies",
    departure_date: "",
    resume: "Resume location",
    bio: "Bio location",
    photo: "https://cdn-icons-png.flaticon.com/512/456/456212.png",
  });
  return (
    <>
      <div className="information-content">
        <div className="profile-top">
          <div className="profile">
            <label htmlFor="firstname">
              <p className="firstname">First Name : {userdata.first_name}</p>
            </label>
            <label htmlFor="Designation">
              <p className="Designation">Designation : {userdata.designation}</p>
            </label>
            <label htmlFor="Line">
              <p className="Line">Line : {userdata.line}</p>
            </label>
            <label htmlFor="Institution">
              <p className="Institution">Institution : {userdata.institution}</p>
            </label>
            <label htmlFor="Resume">
              <p className="Resume">Resume : {userdata.resume}</p>
            </label>
          </div>
          <div className="profile">
            <label htmlFor="Middle Name">
              <p className="Middle Name">Middle Name : {userdata.middle_name}</p>
            </label>
            <label htmlFor="Line Division">
              <p className="Line Division">Line Division : {userdata.line_division}</p>
            </label>
            <label htmlFor="Degree">
              <p className="Degree">Degree : {userdata.degree}</p>
            </label>
            <label htmlFor="eci">
              <p className="eci">Extra Curricular Interest : {userdata.eci}</p>
            </label>
            <label htmlFor="Bio">
              <p className="Bio">Bio : {userdata.bio}</p>
            </label>
          </div>
          <div className="profile">
            <label htmlFor="Last Name">
              <p className="Last Name">Last Name : {userdata.last_name}</p>
            </label>
            <label htmlFor="Join Date">
              <p className="Join Date">Join Date : {userdata.join_date}</p>
            </label>
            <label htmlFor="graduation">
              <p className="graduation">
                Graduation year : {userdata.graduation_year}
              </p>
            </label>
            <label htmlFor="departure">
              <p className="departure">Departure Date : {userdata.departure_date}</p>
            </label>
          </div>
          <div>
            <img src = {userdata.photo} alt="user_photo" className="user_photo"></img>
          </div>
        </div>
        <div className="profile-bottom">
          <div className="profile-button">
            <button>Edit</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Information;
