import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendeeTable.css";

function RoomInquiriesTable() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get("http://localhost:5000/api/inquiries")
      .then((response) => {
        setInquiries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="table">
      <h1>Room Inquiries Table</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Room ID</th>
            <th>Inquiry Type</th>
            <th>Request Date</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry._id}>
              <td>{inquiry.studentId}</td>
              <td>{inquiry.roomId}</td>
              <td>{inquiry.inquireType}</td>
              <td>{new Date(inquiry.createdAt).toLocaleDateString()}</td>
              <td>{inquiry.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoomInquiriesTable;
