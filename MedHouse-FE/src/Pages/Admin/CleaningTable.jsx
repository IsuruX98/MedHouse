import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendeeTable.css";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
emailjs.init("McyT0cwVhQOXgog9F");

function CleaningTable() {
  const [cleaningRequests, setCleaningRequests] = useState([]);
  const [studentEmail, setStudentEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestStatus, setRequestStatus] = useState("");

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

      // Set the request status for sending appropriate email message
      setRequestStatus(newStatus);

      // When accepting or rejecting, open the modal for entering student email
      setIsModalOpen(true);

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

  const handleEmailSend = () => {
    let emailSubject = "";
    let emailDescription = "";

    if (requestStatus === "accepted") {
      emailSubject = "Cleaning Request Accepted";
      emailDescription = "Your cleaning request has been accepted.";
    } else if (requestStatus === "rejected") {
      emailSubject = "Cleaning Request Rejected";
      emailDescription = "Your cleaning request has been rejected.";
    }

    // Send email with the specific status message
    sendEmail(studentEmail, emailSubject, emailDescription);

    // Close the modal after sending the email
    setIsModalOpen(false);
  };

  const sendEmail = (toEmail, subject, description) => {
    const emailServiceId = "service_dab7f58"; // Replace with your Email.js service ID
    const templateId = "template_b5hpmrk"; // Replace with your Email.js template ID

    emailjs
      .send(emailServiceId, templateId, {
        to_email: toEmail,
        subject: subject,
        description: description,
      })
      .then(
        (response) => {
          Swal.fire({
            icon: "success",
            title: "Email Sent Successfully!",
            text: `Email sent to ${toEmail}`,
          });
          console.log("Email sent successfully:", response);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email sending failed. Please try again later.",
          });
          console.error("Email sending failed:", error);
        }
      );
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

      {/* Modal for entering student email */}
      {isModalOpen && (
        <div className="modal-container">
          <h2>Enter Student Email</h2>
          <br />
          <input
            className="modal-input"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            placeholder="Enter student email"
          />
          <div className="modal-buttons">
            <button className="send-btn" onClick={handleEmailSend}>
              Send Email
            </button>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CleaningTable;
