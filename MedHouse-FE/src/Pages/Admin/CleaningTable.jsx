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

  const handleStatusChange = async (id, newStatus) => {
    try {
      // Update the status of the cleaning request in the backend
      await axios.patch(`http://localhost:5000/api/cleaning/${id}/status`, {
        status: newStatus,
      });

      // Update the local state with the updated status
      setCleaningRequests((prevRequests) =>
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
      <h1>Cleaning Requests Table</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Room ID</th>
            <th>Cleaning Level</th>
            <th>Request Date</th>
            <th>Mention</th>
            <th>Status</th>
            <th>Actions</th>
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

export default CleaningTable;
