import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../ServicesPage/Forms/forms.css";
import Swal from "sweetalert2";

function RoomInquire() {
  const [formData, setFormData] = useState({
    studentId: "",
    roomId: "",
    inquireType: "immediate_solution",
    inquiriesCategory: "room_change",
    contactNumber: "",
    reason: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/inquiries", formData);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Inquiry submitted successfully!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Error submitting inquiry. Please try again later.",
      });
    }
  };

  return (
    <div className="mentoring">
      <div className="header">
        <Link to="/home">Back</Link>
        <h2>Room Inquire</h2>
        <Link to="/home">Home</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="student_detail">
          <label htmlFor="studentId">Student ID</label>
          <input
            type="number"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="roomId">Room ID</label>
          <input
            type="text"
            id="roomId"
            name="roomId"
            value={formData.roomId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="CleaningType">
          <label htmlFor="inquireType">Inquire Type</label>
          <select
            id="inquireType"
            name="inquireType"
            value={formData.inquireType}
            onChange={handleInputChange}
          >
            <option value="immediate_solution">Immediate Solution</option>
            <option value="suggestion">Suggestion</option>
          </select>
          <label htmlFor="inquiriesCategory">Inquiries Category</label>
          <select
            id="inquiriesCategory"
            name="inquiriesCategory"
            value={formData.inquiriesCategory}
            onChange={handleInputChange}
          >
            <option value="room_change">Room Change</option>
            <option value="room_request">Room Request</option>
            <option value="roommate_problem">Roommate Problem</option>
            <option value="room_services">Room Services</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="reason">Reason for Inquiry</label>
          <input
            type="text"
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            required
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RoomInquire;
