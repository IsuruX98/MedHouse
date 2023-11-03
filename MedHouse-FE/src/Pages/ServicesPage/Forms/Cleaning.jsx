import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./forms.css";

function Cleaning() {
  const [formData, setFormData] = useState({
    accommodationBlock: "Block A - Girls",
    roomID: "",
    studentID: "",
    requestDate: "",
    overTime: "",
    cleaningLevel: "Dust cleaning",
    mention: "",
    availableWhileCleaning: true,
    itemsInRoom: {
      broom: true,
      dustPad: true,
      dustbin: true,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        itemsInRoom: {
          ...formData.itemsInRoom,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/cleaning",
        formData
      );

      console.log(response.data); // Log the response from the server
      Swal.fire(
        "Success!",
        "Cleaning request submitted successfully!",
        "success"
      );
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Failed to submit cleaning request.", "error");
    }
  };

  return (
    <div className="Cleaning">
      <div className="header">
        <Link to="/services">Back</Link>
        <h2>Cleaning</h2>
        <Link to="/home">Home</Link>
      </div>
      <div className="guidelines_cleaning">
        <h3>Guidelines</h3>
        <ul>
          <li>
            Please submit cleaning request within 48 hours before the request
            date.
          </li>
          <li>Please ready your room for the cleaning process.</li>
          <li>
            Do not put any sanitary items and expired food items in the dustbins
            during the cleaning service period.
          </li>
          <li>
            Take responsibility for valuable items in the room during the
            cleaning period.
          </li>
        </ul>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="Accommodation_Block">
            Accommodation Block (select)
          </label>
          <select
            name="accommodationBlock"
            id="Accommodation_Block"
            onChange={handleChange}
            value={formData.accommodationBlock}
          >
            <option value="Block A - Girls">Block A - Girls</option>
            <option value="Block B - Girls">Block B - Girls</option>
            <option value="Block C - Girls">Block C - Girls</option>
            <option value="Block A - Boys">Block A - Boys</option>
            <option value="Block B - Boys">Block B - Boys</option>
            <option value="Block C - Boys">Block C - Boys</option>
          </select>
        </div>
        <div>
          <label htmlFor="RoomID">Room ID</label>
          <input
            type="text"
            name="roomID"
            id="RoomID"
            onChange={handleChange}
            value={formData.roomID}
          />
        </div>
        <div>
          <label htmlFor="StudentID">Student ID</label>
          <input
            type="text"
            name="studentID"
            id="StudentID"
            onChange={handleChange}
            value={formData.studentID}
          />
        </div>
        <div>
          <label htmlFor="request_date">Cleaning request date</label>
          <input
            type="datetime-local"
            name="requestDate"
            id="request_date"
            onChange={handleChange}
            value={formData.requestDate}
          />
        </div>
        <div>
          <label htmlFor="over_time">Cleaning over time</label>
          <input
            type="datetime-local"
            name="overTime"
            id="over_time"
            onChange={handleChange}
            value={formData.overTime}
          />
        </div>
        <div>
          <label htmlFor="level">Cleaning Level (Select)</label>
          <select
            name="cleaningLevel"
            id="level"
            onChange={handleChange}
            value={formData.cleaningLevel}
          >
            <option value="Dust cleaning">Dust cleaning</option>
            <option value="Room washing">Room washing</option>
            <option value="Room, courting, and furniture item cleaning">
              Room, courting, and furniture item cleaning
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="mention">
            If you need other cleaning items please mention
          </label>
          <textarea
            name="mention"
            id="mention"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formData.mention}
          ></textarea>
        </div>
        <div>
          <p>Are you available in the room area while the cleaning period?</p>
          <div className="radio">
            <input
              type="radio"
              name="availableWhileCleaning"
              id="radio_yes"
              value="true"
              onChange={handleChange}
              checked={formData.availableWhileCleaning === true}
            />
            <label htmlFor="radio_yes">Yes</label>
            <input
              type="radio"
              name="availableWhileCleaning"
              id="radio_no"
              value="false"
              onChange={handleChange}
              checked={formData.availableWhileCleaning === false}
            />
            <label htmlFor="radio_no">No</label>
          </div>
        </div>
        <div>
          <p>Available items in your room</p>
          <div className="checkbox">
            <div className="checkboxitem">
              <input
                type="checkbox"
                name="broom"
                id="broom"
                onChange={handleChange}
                checked={formData.itemsInRoom.broom}
              />
              <label htmlFor="broom">Broom</label>
            </div>
            <div className="checkboxitem">
              <input
                type="checkbox"
                name="dustPad"
                id="dust_pad"
                onChange={handleChange}
                checked={formData.itemsInRoom.dustPad}
              />
              <label htmlFor="dust_pad">Dust Pad</label>
            </div>
            <div className="checkboxitem">
              <input
                type="checkbox"
                name="dustbin"
                id="dustbin"
                onChange={handleChange}
                checked={formData.itemsInRoom.dustbin}
              />
              <label htmlFor="dustbin">Dustbin</label>
            </div>
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Cleaning;
