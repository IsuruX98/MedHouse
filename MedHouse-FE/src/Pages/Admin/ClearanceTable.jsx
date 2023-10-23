import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendeeTable.css";

function ClearanceTable() {
  const [clearanceRequests, setClearanceRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get("http://localhost:5000/api/clearance")
      .then((response) => {
        setClearanceRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      // Update the status of the clearance request in the backend
      await axios.patch(`http://localhost:5000/api/clearance/${id}/status`, {
        status: newStatus,
      });

      // Update the local state with the updated status
      setClearanceRequests((prevRequests) =>
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
      <h1>Clearance Requests Table</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Room ID</th>
            <th>Student Year</th>
            <th>Duration</th>
            <th>Hand Over Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clearanceRequests.map((request) => (
            <tr key={request._id}>
              <td>{request.studentID}</td>
              <td>{request.roomID}</td>
              <td>{new Date(request.handOverDate).getFullYear()}</td>
              <td>{request.duration}</td>
              <td>{new Date(request.handOverDate).toLocaleDateString()}</td>
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

export default ClearanceTable;
