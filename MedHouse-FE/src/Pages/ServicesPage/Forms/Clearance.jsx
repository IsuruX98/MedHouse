import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./forms.css";

function Clearance() {
  const [formData, setFormData] = useState({
    studentName: "",
    studentID: "",
    studentEmail: "",
    roomID: "",
    registrationYear: "",
    duration: "",
    beds: "",
    towelRack: false,
    chair: false,
    table: false,
    cardboard: false,
    extraKey: false, // Changed from 'key' to 'extraKey'
    handOverDate: "",
    otherNotes: "",
    certified: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/clearance", formData)
      .then((response) => {
        // Handle success
        console.log(response.data); // Log the response for debugging
        Swal.fire(
          "Success!",
          "Clearance information submitted successfully!",
          "success"
        );
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
        Swal.fire("Error!", "Failed to submit clearance information!", "error");
      });
  };

  return (
    <div className="clearance">
      <div className="header">
        <Link to="/services">Back</Link>
        <h2>Clearance</h2>
        <Link to="/home">Home</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentName">Student name</label>
        <input
          type="text"
          name="studentName"
          id="studentName"
          value={formData.studentName}
          onChange={handleChange}
        />

        <label htmlFor="studentID">Student ID</label>
        <input
          type="text"
          name="studentID"
          id="studentID"
          value={formData.studentID}
          onChange={handleChange}
        />

        <label htmlFor="studentEmail">Student Email</label>
        <input
          type="email"
          name="studentEmail"
          id="studentEmail"
          value={formData.studentEmail}
          onChange={handleChange}
        />

        <label htmlFor="roomID">Room ID</label>
        <input
          type="text"
          name="roomID"
          id="roomID"
          value={formData.roomID}
          onChange={handleChange}
        />

        <label htmlFor="registrationYear">Registration Year</label>
        <input
          type="number"
          name="registrationYear"
          id="registrationYear"
          value={formData.registrationYear}
          onChange={handleChange}
        />

        <label htmlFor="duration">
          Duration you are going to use this room
        </label>
        <input
          type="text"
          name="duration"
          id="duration"
          value={formData.duration}
          onChange={handleChange}
        />

        <div className="checkbox-container">
          <label htmlFor="beds">Number of Beds</label>
          <input
            type="number"
            name="beds"
            id="beds"
            value={formData.beds}
            onChange={handleChange}
          />

          <label htmlFor="towelRack">Towel Rack</label>
          <input
            type="checkbox"
            name="towelRack"
            id="towelRack"
            checked={formData.towelRack}
            onChange={handleChange}
          />

          <label htmlFor="chair">Chair</label>
          <input
            type="checkbox"
            name="chair"
            id="chair"
            checked={formData.chair}
            onChange={handleChange}
          />

          <label htmlFor="table">Table</label>
          <input
            type="checkbox"
            name="table"
            id="table"
            checked={formData.table}
            onChange={handleChange}
          />

          <label htmlFor="cardboard">Cardboard Wood</label>
          <input
            type="checkbox"
            name="cardboard"
            id="cardboard"
            checked={formData.cardboard}
            onChange={handleChange}
          />

          <label htmlFor="key">Extra Key</label>
          <input
            type="checkbox"
            name="key"
            id="key"
            checked={formData.key}
            onChange={handleChange}
          />
        </div>

        <label htmlFor="handOverDate">Hand Over Date</label>
        <input
          type="date"
          name="handOverDate"
          id="handOverDate"
          value={formData.handOverDate}
          onChange={handleChange}
        />

        <label htmlFor="otherNotes">Other Notes</label>
        <textarea
          name="otherNotes"
          id="otherNotes"
          cols="30"
          rows="10"
          value={formData.otherNotes}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="honorCertified">
          I honor certified this clearance information is correct.
        </label>
        <input
          type="checkbox"
          name="certified"
          id="certified"
          checked={formData.certified}
          onChange={handleChange}
        />

        <input type="submit" value="done" />
      </form>
    </div>
  );
}

export default Clearance;
