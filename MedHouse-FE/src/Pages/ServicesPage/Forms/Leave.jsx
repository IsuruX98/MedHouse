import { Link } from "react-router-dom";
import "./forms.css";

function Leave() {
  return (
    <div className="leave">
      <div className="header">
        <Link to="/services">Back</Link>
        <h2>Leave Request</h2>
        <Link to="/">Home</Link>
      </div>
      <p>You must available in the hostel area 9pm - 5am</p>
      <p>Please submit your weekend leave request at least 24 hour before leave.</p>
      <form action="">
        <div className="personal_info">
          <label htmlFor="student_name">Student Name</label>
          <input type="text" />
          <label htmlFor="student_id">Student ID</label>
          <input type="number" name="student_id" id="student_id" />
          <label htmlFor="accomodation">Acccommodation Block</label>
          <select name="accomodation" id="accomodation">
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
          </select>
          <label htmlFor="room_id">Room ID</label>
          <input type="number" name="room_id" id="room_id" />
        </div>
        <div className="types">
          <label htmlFor="leave_type">Leave type</label>
          <select name="leave_type" id="leave_type">
            <option value="home">Go Home</option>
            <option value="clinical">leave for clinical</option>
            <option value="academic">leave for academic reason</option>
            <option value="ward">leave for ward round</option>
            <option value="sport">leave for sports</option>
            <option value="extra">leave for extra academic activity</option>
            <option value="lecture">leave for extra lecture</option>
            <option value="other">other</option>
          </select>
          <label htmlFor="mention_other">If other please Mention</label>
          <input type="text" />
        </div>
        <div className="time">
          <label htmlFor="indate">IN Date</label>
          <input type="date" name="indate" id="indate" />
          <label htmlFor="outdate">OUT Date</label>
          <input type="date" name="outdate" id="outdate" />
        </div>
        <div className="responsible">
          <label htmlFor="personName">Responsible Person name/position</label>
          <input type="text" />
          <label htmlFor="contactNo">Contact No</label>
          <input type="number" name="contactNo" id="contactNo" />
        </div>
        <p>Please approve my leave request</p>
        <input type="submit" value="done" />
      </form>
    </div>
  );
}

export default Leave;
