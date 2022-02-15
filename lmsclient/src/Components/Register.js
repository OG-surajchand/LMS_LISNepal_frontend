import TopHeader from "./TopHeader";
import React, { useState } from "react";
import Footer from "./Footer";
import "../Style/Register.css";

function Register() {
  const initialvalues = {
    name: "",
    designation: "",
    email: "",
    line: "",
    degree: "",
    photo: "",
    graduation: "",
    institution: "",
    interest: "",
    join: "",
    resume: "",
    bio: "",
  };
  const [formValues, setformValues] = useState(initialvalues);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submit Done");
  };

  return (
    <>
      <div className="container">
        <TopHeader title="User Registration"/>
        <div className=".mid-container">
          <form className="mid_container" onSubmit={handleSubmit}>
            <div className="upper-container">
              <div className="left-container">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  className="data-field"
                  placeholder="Employee Name"
                  onChange={handlechange}
                  value={formValues.name}
                  required
                />
                <label>Designation</label>
                <input
                  name="designation"
                  type="text"
                  placeholder="Designation"
                  className="data-field"
                  onChange={handlechange}
                  value={formValues.designation}
                  required
                />
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  className="data-field"
                  placeholder="Email"
                  onChange={handlechange}
                  value={formValues.email}
                  required
                />
                <label>Graduation Date</label>
                <input
                  type="month"
                  name="graduation"
                  className="data-field"
                  onChange={handlechange}
                  value={formValues.graduation}
                  required
                />
                <label>Degree</label>
                <input
                  name="degree"
                  className="data-field"
                  onChange={handlechange}
                  placeholder="Enter Degree"
                  value={formValues.degree}
                  required
                />
                <label>Add Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  name="photo"
                  className="data-field"
                  onChange={handlechange}
                  value={formValues.photo}
                  required
                />
              </div>
              <div className="right-container">
                <label>Line</label>
                <select
                  name="line"
                  onChange={handlechange}
                  required
                  value={formValues.line}
                  className="data-field"
                >
                  <option className="option-field" value="select">
                    Select Line
                  </option>
                  <option className="option-field" value="BI">
                    BI
                  </option>
                  <option className="option-field" value="Training">
                    Training
                  </option>
                  <option className="option-field" value="Gocchii">
                    Gocchii
                  </option>
                  <option className="option-field" value="Development Services">
                    Development Services
                  </option>
                  <option className="option-field" value="InfraOps">
                    InfraOps
                  </option>
                  <option className="option-field" value="Robling">
                    Robling
                  </option>
                </select>
                <label>Institution</label>
                <input
                  name="institution"
                  className="data-field"
                  placeholder="Enter Institution"
                  onChange={handlechange}
                  value={formValues.institution}
                  required
                />
                <label>Extra Curricular Interest</label>
                <input
                  name="interest"
                  className="data-field"
                  placeholder="Enter Interest"
                  onChange={handlechange}
                  value={formValues.interest}
                  required
                />
                <label>Join Date</label>
                <input
                  type="date"
                  name="join"
                  className="data-field"
                  onChange={handlechange}
                  value={formValues.join}
                  required
                />
                <label>Add Resume</label>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  name="resume"
                  className="data-field"
                  onChange={handlechange}
                  value={formValues.resume}
                  required
                />
                <label>Add Bio</label>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  name="bio"
                  className="data-field"
                  onChange={handlechange}
                  value={formValues.bio}
                  required
                />
              </div>
            </div>
            <div className="lower">
              <button className="create_user" type="submit">
                Register User
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register;
