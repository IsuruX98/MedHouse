import { Link } from "react-router-dom";
import "./forms.css";

function Mentoring() {
  return (
    <div className="mentoring">
      <div className="header">
        <Link to="/services">Back</Link>
        <h2>Mentoring Program - Let's Talk</h2>
        <Link to="/">Home</Link>
      </div>
      <div className="profile_doctors">
        when the back end is connected add the doctors here
      </div>
      <div className="contect">
        Content about the program goes here
      </div>
      <form action="">
        <div className="student_detail">
          <label htmlFor="student_id">Student ID</label>
          <input type="number" name="" id="" />
          <label htmlFor="academic_year">Academic Year</label>
          <input type="number" name="academic_year" id="academic_year" />
          <label htmlFor="room_id">Room ID</label>
          <input type="number" name="room_id" id="room_id" />
          <label htmlFor="request_time">Your request time</label>
          <input type="number" name="request_time" id="request_time" />
        </div>
        <div className="mentoringType">
          <label htmlFor="type">Mention the menoring type</label>
          <select name="type" id="type">
            <option value="student">from senior student</option>
            <option value="lecture">from senior lecture</option>
            <option value="counselling">from counselling member</option>
          </select>
          <label htmlFor="reason">Mentoring Reason</label>
          <select name="reason" id="reason">
            <option value="academic">For Academic</option>
            <option value="exam">For Exam</option>
            <option value="personal">For Personal Matter</option>
            <option value="health">For health problem</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input type="submit" value="done" />
      </form>
    </div>
  );
}

export default Mentoring;
