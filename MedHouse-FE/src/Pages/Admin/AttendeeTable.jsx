import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendeeTable.css";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
emailjs.init("McyT0cwVhQOXgog9F");

function AttendeeTable() {
  const [attendees, setAttendees] = useState([]);
  const [selectedAttendee, setSelectedAttendee] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

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

  const handleSendEmail = () => {
    const emailServiceId = "service_dab7f58"; // Replace with your Email.js service ID
    console.log("Sending email to:", selectedAttendee.emailA);
    // Send email using Email.js
    emailjs
      .send(emailServiceId, "template_hgm27f4", {
        to_email: selectedAttendee.emailA,
        subject: subject,
        description: description,
      })
      .then(
        (response) => {
          Swal.fire({
            icon: "success",
            title: "Email Sent Successfully!",
            text: `Email sent to ${selectedAttendee.emailA}`,
          });
          // Reset form fields and hide the form after sending the email
          setSubject("");
          setDescription("");
          setShowForm(false);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email sending failed. Please try again later.",
          });

          console.error("Email sending failed:", error);
          // Handle error scenarios if needed
        }
      );
  };

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
            <th>Action</th>
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
              <td>
                <button
                  className="accept"
                  onClick={() => {
                    setSelectedAttendee(attendee);
                    setShowForm(true);
                  }}
                >
                  Send Email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="modal-container">
          <label>To: {selectedAttendee.emailA}</label>
          <br /> <br />
          <label>Subject:</label>
          <textarea
            className="modal-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label>Description:</label>
          <textarea
            className="modal-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="modal-buttons">
            <button className="send-btn" onClick={handleSendEmail}>
              Send
            </button>
            <button className="close-btn" onClick={() => setShowForm(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttendeeTable;
