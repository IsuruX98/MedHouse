import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendeeTable.css";

function MedicalServiceTable() {
  const [medicalServiceRequests, setMedicalServiceRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get("http://localhost:5000/api/medical")
      .then((response) => {
        setMedicalServiceRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="table">
      <h1>Medical Service Requests Table</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Room ID</th>
            <th>Medical Service Type</th>
            <th>Treatment Level</th>
            <th>Disease</th>
            <th>Date</th>
            <th>Make Appointment</th>
          </tr>
        </thead>
        <tbody>
          {medicalServiceRequests.map((request) => (
            <tr key={request._id}>
              <td>{request.studentID}</td>
              <td>{request.roomID}</td>
              <td>{request.serviceType}</td>
              <td>{request.treatmentLevel}</td>
              <td>{request.illness}</td>
              <td>{new Date(request.appointmentTime).toLocaleString()}</td>
              <td>{request.makeAppointment ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicalServiceTable;
