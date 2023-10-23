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

  const handleStatusChange = async (id, newStatus) => {
    try {
      // Update the status of the inquiry in the backend
      await axios.patch(`http://localhost:5000/api/inquiries/${id}/status`, {
        status: newStatus,
      });

      // Update the local state with the updated status
      setInquiries((prevInquiries) =>
        prevInquiries.map((inquiry) =>
          inquiry._id === id ? { ...inquiry, status: newStatus } : inquiry
        )
      );
    } catch (error) {
      console.error("Error updating status: ", error);
    }
  };

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
            <th>Status</th>
            <th>Actions</th>
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
              <td className="stats">{inquiry.status}</td>
              <td>
                {inquiry.status === "pending" && (
                  <>
                    <button
                      className="accept"
                      onClick={() =>
                        handleStatusChange(inquiry._id, "accepted")
                      }
                    >
                      Accept
                    </button>
                    <button
                      className="reject"
                      onClick={() =>
                        handleStatusChange(inquiry._id, "rejected")
                      }
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoomInquiriesTable;
