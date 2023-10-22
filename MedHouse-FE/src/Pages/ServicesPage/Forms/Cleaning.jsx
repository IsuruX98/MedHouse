import { Link } from "react-router-dom";
import "./forms.css";

function Cleaning() {
  return (
    <div className="Cleaning">
      <div className="header">
        <Link to="/services">Back</Link>
        <h2>Cleaning</h2>
        <Link to="/">Home</Link>
      </div>
      <div className="guidelines_cleaning">
        <h3>Guidelines</h3>
        <ul>
          <li>
            Please submit cleaning request withing 48 hours before request date
          </li>
          <li>Please ready your room cleaning process</li>
          <li>
            Don't any sanitary items and expire food items put in the dustbins
            during cleaning service period.
          </li>
          <li>
            Get own responsible about valuable items in the room during cleaning
            period.
          </li>
        </ul>
      </div>
      <form action="">
        <div>
          <label htmlFor="Accommodation_Block">
            Accommodation Block (select)
          </label>
          <select name="Accommodation" id="Accommodation_Block">
            <option value="a_girls">Block A - Girls</option>
            <option value="b_girls">Block B - Girls</option>
            <option value="c_girls">Block C - Girls</option>
            <option value="a_boys">Block A - Boys</option>
            <option value="b_boys">Block B - Boys</option>
            <option value="c_boys">Block C - Boys</option>
          </select>
        </div>
        <div>
          <label htmlFor="RoomID">Room ID</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="StudentID">Student ID</label>
          <input type="number" name="studentID" id="StudentID" />
        </div>
        <div>
          <label htmlFor="request_date">Cleaning request date</label>
          <input type="datetime-local" name="request_date" id="request_date" />
        </div>
        <div>
          <label htmlFor="over_time">Cleaning over time</label>
          <input type="datetime-local" name="end_date" id="over_time" />
        </div>
        <div>
          <label htmlFor="level">Cleaning Level (Select)</label>
          <select name="level" id="level">
            <option value="dust">Dust cleaning</option>
            <option value="washing">Room washing</option>
            <option value="item">
              Room, courting and furniture item cleaning
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="mention">
            If you need other cleaning items please mention
          </label>
          <textarea name="mention" id="mention" cols="30" rows="10"></textarea>
        </div>
        <div>
          <p>Are you available in the room area while cleaning period</p>
          <div className="radio">
          
            <input type="radio" name="available" id="radio_yes" />
            <label htmlFor="radio_yes">Yes</label>
            
            <input type="radio" name="available" id="radio_no" />
            <label htmlFor="radio_no">No</label>
            
          </div>
        </div>
        <div>
          <p>Available items in your room</p>
          <div className="checkbox">
            <div className="checkboxitem">
              <input type="checkbox" name="itemsInRoom" id="broom" />
              <label htmlFor="broom">Broom</label>
            </div>
            <div className="checkboxitem">
              <input type="checkbox" name="itemsInRoom" id="dust_pad" />
              <label htmlFor="dust_pad">Dust Pad</label>
            </div>
            <div className="checkboxitem">
              <input type="checkbox" name="itemsInRoom" id="dustbin" />
              <label htmlFor="dustbin">Dustbin</label>
            </div>
          </div>
        </div>
        <input type="submit" value="done" />
      </form>
    </div>
  );
}

export default Cleaning;
