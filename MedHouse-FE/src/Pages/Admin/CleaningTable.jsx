import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendeeTable.css";

function CleaningTable() {
  const [cleaningRequests, setCleaningRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get("http://localhost:5000/api/cleaning")
      .then((response) => {
        setCleaningRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="table">
      <h1>Cleaning Requests Table</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Room ID</th>
            <th>Cleaning Level</th>
            <th>Request Date</th>
            <th>Mention</th>
          </tr>
        </thead>
        <tbody>
          {cleaningRequests.map((request) => (
            <tr key={request._id}>
              <td>{request.studentID}</td>
              <td>{request.roomID}</td>
              <td>{request.cleaningLevel}</td>
              <td>{new Date(request.requestDate).toLocaleString()}</td>
              <td>{request.mention}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CleaningTable;
