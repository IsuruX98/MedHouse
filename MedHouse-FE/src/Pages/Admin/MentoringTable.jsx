import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendeeTable.css";

function MentoringTable() {
  const [mentoringRequests, setMentoringRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get("http://localhost:5000/api/mentoring")
      .then((response) => {
        setMentoringRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      // Update the status of the mentoring request in the backend
      await axios.patch(`http://localhost:5000/api/mentoring/${id}/status`, {
        status: newStatus,
      });

      // Update the local state with the updated status
      setMentoringRequests((prevRequests) =>
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
      <h1>Mentoring Requests Table</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Academic Year</th>
            <th>Room ID</th>
            <th>Request Time</th>
            <th>Mentoring Type</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mentoringRequests.map((request) => (
            <tr key={request._id}>
              <td>{request.studentID}</td>
              <td>{request.academicYear}</td>
              <td>{request.roomID}</td>
              <td>{request.requestTime}</td>
              <td>{request.mentoringType}</td>
              <td>{request.reason}</td>
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

export default MentoringTable;
