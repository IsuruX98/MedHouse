import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./forms.css";

function Leave() {
  const [formData, setFormData] = useState({
    studentName: "",
    studentID: "",
    accommodationBlock: "boy",
    roomID: "",
    leaveType: "home",
    otherReason: "",
    inDate: "",
    outDate: "",
    responsiblePerson: "",
    contactNo: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/leave",
        formData
      );

      Swal.fire("Success", "Leave request submitted successfully!", "success");
    } catch (error) {
      console.error("Error submitting leave request:", error);
      Swal.fire(
        "Error",
        "Failed to submit leave request. Please try again later.",
        "error"
      );
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="leave">
      <div className="header">
        <Link to="/services">Back</Link>
        <h2>Leave Request</h2>
        <Link to="/home">Home</Link>
      </div>
      <p>You must be available in the hostel area 9pm - 5am</p>
      <p>
        Please submit your weekend leave request at least 24 hours before leave.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="personal_info">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            name="studentName"
            id="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="studentID">Student ID</label>
          <input
            type="text"
            name="studentID"
            id="studentID"
            value={formData.studentID}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="accommodationBlock">Accommodation Block</label>
          <select
            name="accommodationBlock"
            id="accommodationBlock"
            value={formData.accommodationBlock}
            onChange={handleInputChange}
            required
          >
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
          </select>
          <label htmlFor="roomID">Room ID</label>
          <input
            type="text"
            name="roomID"
            id="roomID"
            value={formData.roomID}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="types">
          <label htmlFor="leaveType">Leave Type</label>
          <select
            name="leaveType"
            id="leaveType"
            value={formData.leaveType}
            onChange={handleInputChange}
            required
          >
            <option value="home">Go Home</option>
            <option value="clinical">Leave for Clinical</option>
            {/* ... (other options) ... */}
            <option value="other">Other</option>
          </select>
          {formData.leaveType === "other" && (
            <div>
              <label htmlFor="otherReason">Reason for Leave</label>
              <input
                type="text"
                name="otherReason"
                id="otherReason"
                value={formData.otherReason}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
        </div>
        <div className="time">
          <label htmlFor="inDate">IN Date</label>
          <input
            type="date"
            name="inDate"
            id="inDate"
            value={formData.inDate}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="outDate">OUT Date</label>
          <input
            type="date"
            name="outDate"
            id="outDate"
            value={formData.outDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="responsible">
          <label htmlFor="responsiblePerson">
            Responsible Person name/position
          </label>
          <input
            type="text"
            name="responsiblePerson"
            id="responsiblePerson"
            value={formData.responsiblePerson}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="contactNo">Contact No</label>
          <input
            type="tel"
            name="contactNo"
            id="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <p>Please approve my leave request</p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Leave;
