import { Link } from "react-router-dom";
import "./forms.css";

function Medical() {
  return (
    <div className="medical">
      <div className="header">
        <Link to="/services">Back</Link>
        <h2>Medical service</h2>
        <Link to="/">Home</Link>
      </div>
      <div className="time_table">
        display the available doctors time table as a table keep empty while the
        backend completed
      </div>
      <p className="note">
        <strong>Notes-</strong> <br />
        if you feel sick do not use any kind of medicine without doctor
        reference, You are still MBBS students. Please reach your hostel medical
        service.
      </p>
      <form action="">
        <label htmlFor="name">Student Name</label>
        <input type="text" id="name" />
        <label htmlFor="student_id">Student ID</label>
        <input type="number" name="student_id" id="student_id" />
        <label htmlFor="year">Academic year</label>
        <input type="number" name="year" id="year" />
        <label htmlFor="room_id">Room ID</label>
        <input type="number" name="room_id" id="room_id" />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" />
        <label htmlFor="service_type">Medical service type</label>
        <select name="type" id="service_type">
            <option value="appointment">Make Appointment</option>
            <option value="report">Request medical report</option>
            <option value="sick_notice">Notice about sick</option>
            <option value="sick_leave">Request sick leave</option>
        </select>
        <label htmlFor="level">Disease Level</label>
        <input type="number" name="level" id="level" />
        <label htmlFor="treatment">Treatment Level</label>
        <select name="treatment" id="treatment">
            <option value="normal">Normal Treatment</option>
            <option value="intermedium">Intermedium Treatment</option>
            <option value="fully">Full Treatment</option>
        </select>
        <label htmlFor="mention">Please mention your illness/ sick situation</label>
        <select name="mention" id="mention">
            <option value="fever">Fever</option>
            <option value="loose_motion">Loose Motion</option>
            <option value="headaches">Headaches</option>
            <option value="bone">Broke a bone</option>
            <option value="tissue">Tissu pains</option>
            <option value="gastic">Gastric</option>
            <option value="other">Other</option>
        </select>
        <label htmlFor="other_mention">If other please mention</label>
        <input type="text" />
        <label htmlFor="period">Sick period</label>
        <select name="period" id="period">
          <option value="1">1 day</option>
          <option value="2">2 days</option>
          <option value="3">3 days</option>
          <option value="5">more than 5 days</option>
        </select>
        <label htmlFor="makeAppointment">Do You want to make doctor appointment</label>
        <div className="radiobtn">
        <input type="radio" name="appointment" id="appointment_yes" />
        <label htmlFor="appointment_yes">Yes</label>
        <input type="radio" name="appointment" id="appointment_no" />
        <label htmlFor="appointment_no">No</label>
        </div>
        <label htmlFor="TimeAppointment">Time</label>
        <input type="datetime-local" name="TimeAppointment" id="TimeAppointment" />
        <input type="submit" value="done" />
      </form>
    </div>
  );
}

export default Medical;
