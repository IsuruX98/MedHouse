import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendeeTable.css";

function LeaveRequestTable() {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get("http://localhost:5000/api/leave")
      .then((response) => {
        setLeaveRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      // Update the status of the medical service request in the backend
      await axios.patch(`http://localhost:5000/api/leave/${id}/status`, {
        status: newStatus,
      });

      // Update the local state with the updated status
      setLeaveRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id ? { ...request, status: newStatus } : request
        )
      );
    } catch (error) {
      console.error("Error updating status: ", error);
    }
  };

  return (
    <div className="table">
      <h1>Leave Requests Table</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Accommodation Block</th>
            <th>Room ID</th>
            <th>Leave Type</th>
            <th>In Date</th>
            <th>Out Date</th>
            <th>Contact Number</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((request) => (
            <tr key={request._id}>
              <td>{request.studentID}</td>
              <td>{request.accommodationBlock}</td>
              <td>{request.roomID}</td>
              <td>{request.leaveType}</td>
              <td>{new Date(request.inDate).toLocaleDateString()}</td>
              <td>{new Date(request.outDate).toLocaleDateString()}</td>
              <td>{request.contactNo}</td>
              <td className="stats">{request.status}</td>
              <td>
                {request.status === "pending" && (
                  <>
                    <button
                      className="accept"
                      onClick={() =>
                        handleStatusChange(request._id, "accepted")
                      }
                    >
                      Accept
                    </button>
                    <button
                      className="reject"
                      onClick={() =>
                        handleStatusChange(request._id, "rejected")
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

export default LeaveRequestTable;
