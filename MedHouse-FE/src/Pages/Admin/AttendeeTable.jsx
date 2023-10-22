import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendeeTable.css";

function AttendeeTable() {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get("http://localhost:5000/api/accommodation")
      .then((response) => {
        setAttendees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="table">
      <h1>Attendee Table</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Academic Year</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee) => (
            <tr key={attendee._id}>
              <td>{attendee.fname}</td>
              <td>{attendee.sname}</td>
              <td>{attendee.emailA}</td>
              <td>{attendee.telnum}</td>
              <td>{attendee.academicYear}</td>
              <td>{attendee.ncity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendeeTable;
