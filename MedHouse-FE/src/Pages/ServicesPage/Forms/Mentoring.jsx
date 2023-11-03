import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./forms.css";

function Mentoring() {
  const [formData, setFormData] = useState({
    studentID: "",
    academicYear: "",
    roomID: "",
    requestTime: "",
    mentoringType: "student",
    reason: "academic",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/mentoring", formData);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Mentoring form submitted successfully!",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to submit mentoring form. Please try again later.",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="mentoring">
      <div className="header">
        <Link to="/services">Back</Link>
        <h2>Mentoring Program - Let's Talk</h2>
        <Link to="/home">Home</Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="student_detail">
          <label htmlFor="student_id">Student ID</label>
          <input
            type="text"
            name="studentID"
            id="student_id"
            onChange={handleInputChange}
          />
          <label htmlFor="academic_year">Academic Year</label>
          <input
            type="number"
            name="academicYear"
            id="academic_year"
            onChange={handleInputChange}
          />
          <label htmlFor="room_id">Room ID</label>
          <input
            type="text"
            name="roomID"
            id="room_id"
            onChange={handleInputChange}
          />
          <label htmlFor="request_time">Your request time</label>
          <input
            type="number"
            name="requestTime"
            id="request_time"
            onChange={handleInputChange}
          />
        </div>
        <div className="mentoringType">
          <label htmlFor="type">Mention the mentoring type</label>
          <select name="mentoringType" id="type" onChange={handleInputChange}>
            <option value="student">from senior student</option>
            <option value="lecture">from senior lecture</option>
            <option value="counselling">from counseling member</option>
          </select>
          <label htmlFor="reason">Mentoring Reason</label>
          <select name="reason" id="reason" onChange={handleInputChange}>
            <option value="academic">For Academic</option>
            <option value="exam">For Exam</option>
            <option value="personal">For Personal Matter</option>
            <option value="health">For health problem</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input type="submit" value="done" />
      </form>
    </div>
  );
}

export default Mentoring;
