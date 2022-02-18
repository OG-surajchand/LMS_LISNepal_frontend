import React, { useState } from "react";
import "../Style/Pages.css";
import "antd/dist/antd.css";
import { Modal, Button, Input, DatePicker } from "antd";

function Information() {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("Saving...");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
    //Perform the PUT request to the API
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const user_obj = {
    first_name: "Suraj",
    middle_name: "Bdr.",
    last_name: "Chand",
    designation: "Intern",
    line: "Development Services",
    line_division: "None",
    join_date: "02-02-2022",
    degree: "BE",
    graduation_year: "2022",
    institution: "KEC",
    eci: "Sports, Movies",
    departure_date: "None",
    resume: "Resume location",
    bio: "Bio location",
    photo: "https://cdn-icons-png.flaticon.com/512/456/456212.png",
  };
  const [userdata, setuserdata] = useState(user_obj);
  const [startdate, setstartdate] = useState("2022");

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
    console.log(userdata);
  };
  return (
    <>
      <div className="information-content">
        <div className="profile-top">
          <div className="profile">
            <label>First Name</label>
            <p className="field">{userdata.first_name}</p>

            <label>First Name</label>
            <p className="field">{userdata.designation}</p>

            <label>Line</label>
            <p className="field">{userdata.line}</p>

            <label>First Name</label>
            <p className="field">{userdata.institution}</p>

            <label>Resume</label>
            <p className="field">{userdata.resume}</p>
          </div>
          <div className="profile">
            <label>Middle Name</label>
            <p className="field">{userdata.middle_name}</p>
            <label>Line Division</label>
            <p className="field">{userdata.line_division}</p>
            <label>Degree</label>
            <p className="field">{userdata.degree}</p>
            <label>Extra Curricular Interest</label>
            <p className="field">{userdata.eci}</p>
            <label>Bio</label>
            <p className="field">{userdata.bio}</p>
          </div>
          <div className="profile">
            <label>Last Name</label>
            <p className="field">{userdata.last_name}</p>
            <label>Joined Date</label>
            <p className="field">{userdata.join_date}</p>
            <label>Graduation Year</label>
            <p className="field">{userdata.graduation_year}</p>
            <label>Departure Date</label>
            <p className="field">{userdata.departure_date}</p>
          </div>
          <div>
            <img
              name="user_photo"
              src={userdata.photo}
              alt="user_photo"
              className="user_photo"
            ></img>
          </div>
        </div>
        <div className="profile-bottom">
          <div className="profile-button">
            <Button type="primary" onClick={showModal}>
              Edit
            </Button>
            <Modal
              title="Edit Information"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <label>First Name</label>
              <Input
                className="edit-field"
                placeholder="First Name"
                name="first_name"
                onChange={handleEdit}
              />
              <label>Middle Name</label>
              <Input
                className="edit-field"
                placeholder="Middle Name"
                name="middle_name"
                onChange={handleEdit}
              />
              <label>Last Name</label>
              <Input
                className="edit-field"
                placeholder="Last Name"
                name="last_name"
                onChange={handleEdit}
              />
              <label>Degree</label>
              <Input
                className="edit-field"
                placeholder="Degree"
                name="degree"
                onChange={handleEdit}
              />
              <label> Graduation Year: </label>
              <DatePicker
                onChange={handleEdit}
                name="graduation_year"
                picker="year"
                name="graduation_year"
              />
              <br />
              <label>Institution</label>
              <Input
                className="edit-field"
                placeholder="Institution"
                name="institution"
                onChange={handleEdit}
              />
              <label>Extracurricular Interest</label>
              <Input
                className="edit-field"
                placeholder="Interest"
                name="eci"
                onChange={handleEdit}
              />
              <label>Attach Photo</label>
              <Input
                className="edit-field"
                type="file"
                placeholder="Add Photo"
                name="photo"
                onChange={handleEdit}
              />
              <label>Attach Resume</label>
              <Input
                className="edit-field"
                type="file"
                placeholder="Add Resume"
                name="resume"
                onChange={handleEdit}
              />
              <label>Attach Bio</label>
              <Input
                className="edit-field"
                type="file"
                placeholder="Add Bio"
                name="bio"
                onChange={handleEdit}
              />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
export default Information;
