import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./forms.css";

function Medical() {
  const [formData, setFormData] = useState({
    studentName: "",
    studentID: "",
    academicYear: "",
    roomID: "",
    age: "",
    serviceType: "appointment",
    diseaseLevel: "1",
    treatmentLevel: "normal",
    illness: "fever",
    otherMention: "",
    sickPeriod: "1",
    makeAppointment: false,
    appointmentTime: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/medical", formData);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Medical form submitted successfully!",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to submit medical form. Please try again later.",
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
    <div className="medical">
      <div className="header">
        <Link to="/services">Back</Link>
        <h2>Medical service</h2>
        <Link to="/home">Home</Link>
      </div>
      <div className="time_table">
        Display the available doctors time table as a table. Keep empty while
        the backend is completed.
      </div>
      <p className="note">
        <strong>Notes-</strong> <br />
        If you feel sick, do not use any kind of medicine without doctor
        reference. You are still MBBS students. Please reach your hostel medical
        service.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Student Name</label>
        <input
          type="text"
          id="name"
          name="studentName"
          onChange={handleInputChange}
        />

        <label htmlFor="student_id">Student ID</label>
        <input
          type="text"
          name="studentID"
          id="student_id"
          onChange={handleInputChange}
        />

        <label htmlFor="year">Academic year</label>
        <input
          type="number"
          name="academicYear"
          id="year"
          onChange={handleInputChange}
        />

        <label htmlFor="room_id">Room ID</label>
        <input
          type="text"
          name="roomID"
          id="room_id"
          onChange={handleInputChange}
        />

        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" onChange={handleInputChange} />

        <label htmlFor="service_type">Medical service type</label>
        <select
          name="serviceType"
          id="service_type"
          onChange={handleInputChange}
        >
          <option value="appointment">Make Appointment</option>
          <option value="report">Request medical report</option>
          <option value="sick_notice">Notice about sick</option>
          <option value="sick_leave">Request sick leave</option>
        </select>

        <label htmlFor="level">Disease Level</label>
        <input
          type="number"
          name="diseaseLevel"
          id="level"
          onChange={handleInputChange}
        />

        <label htmlFor="treatment">Treatment Level</label>
        <select
          name="treatmentLevel"
          id="treatment"
          onChange={handleInputChange}
        >
          <option value="normal">Normal Treatment</option>
          <option value="intermedium">Intermediate Treatment</option>
          <option value="fully">Full Treatment</option>
        </select>

        <label htmlFor="mention">
          Please mention your illness/sick situation
        </label>
        <select name="illness" id="mention" onChange={handleInputChange}>
          <option value="fever">Fever</option>
          <option value="loose_motion">Loose Motion</option>
          <option value="headaches">Headaches</option>
          <option value="bone">Broke a bone</option>
          <option value="tissue">Tissue pains</option>
          <option value="gastic">Gastric</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="other_mention">If other please mention</label>
        <input type="text" name="otherMention" onChange={handleInputChange} />

        <label htmlFor="period">Sick period</label>
        <select name="sickPeriod" id="period" onChange={handleInputChange}>
          <option value="1">1 day</option>
          <option value="2">2 days</option>
          <option value="3">3 days</option>
          <option value="5">more than 5 days</option>
        </select>

        <label htmlFor="makeAppointment">
          Do You want to make a doctor appointment
        </label>
        <div className="radiobtn">
          <input
            type="radio"
            name="makeAppointment"
            id="appointment_yes"
            value="true"
            onChange={handleInputChange}
          />
          <label htmlFor="appointment_yes">Yes</label>
          <input
            type="radio"
            name="makeAppointment"
            id="appointment_no"
            value="false"
            onChange={handleInputChange}
          />
          <label htmlFor="appointment_no">No</label>
        </div>

        <label htmlFor="TimeAppointment">Time</label>
        <input
          type="datetime-local"
          name="appointmentTime"
          id="TimeAppointment"
          onChange={handleInputChange}
        />

        <input type="submit" value="done" />
      </form>
    </div>
  );
}

export default Medical;
