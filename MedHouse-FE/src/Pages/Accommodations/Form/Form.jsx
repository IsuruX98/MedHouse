import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./form.css";

function Form() {
  // lists for radio groups : {id, label}
  const distanceFromKarapitiya = [
    { id: "100500m", label: "100 - 500 m" },
    { id: "500m1km", label: "500 m - 1 km" },
    { id: "1km2km", label: "1 km - 2km" },
    { id: "2kmMore", label: "2 km - More" },
  ];
  const academicYear = [
    { id: "1y", label: "1st Year" },
    { id: "2y", label: "2nd Year" },
    { id: "3y", label: "3rd Year" },
    { id: "4y", label: "4th Year" },
    { id: "5y", label: "5th Year" },
    { id: "finaly", label: "Practical Year (final)" },
  ];
  const degreeProgram = [
    { id: "mbbs", label: "MBBS" },
    { id: "paramed", label: "Para Medical" },
  ];
  const accomodationReqPeriod = [
    { id: "l1m", label: "Less than 1 Month" },
    { id: "l3m", label: "Less than 3 Months" },
    { id: "1year", label: "1 Year" },
    { id: "m1year", label: "More than 1 Year" },
  ];
  const reasonToReqAccmd = [
    { id: "fAcademics", label: "For Academic" },
    { id: "fEPP", label: "For Extra Practical Period" },
    { id: "fEP", label: "For Exam Period" },
  ];

  const [formData, setFormData] = useState({
    fname: "",
    sname: "",
    fullname: "",
    birthday: "",
    NICnumber: "",
    telnum: "",
    mobnum: "",
    emailA: "",
    paddress: "",
    ncity: "",
    district: "",
    country: "",
    pcode: "",
    radioGroupForDistance: "",
    guardianFullname: "",
    guardianPaddress: "",
    contactnum: "",
    academicYear: "",
    degreeProgram: "",
    accormodationReqPeriod: "",
    reasonToReqAccm: "",
    eFname: "",
    eContactnum: "",
    eAddress: "",
    confirmationFname: "",
    confirmationDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/accommodation", formData);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Form submitted successfully!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Error submitting form. Please try again later.",
      });
    }
  };

  return (
    <div className="accomodation-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <fieldset className="personal-info">
          <div className="first-name">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="second-name">
            <label htmlFor="sname">Second Name:</label>
            <input
              type="text"
              id="sname"
              name="sname"
              value={formData.sname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="full-name">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="birth-day">
            <label htmlFor="birthday">Date of Birth</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="nic-no">
            <label htmlFor="NICnumber">NIC Number</label>
            <input
              type="text"
              id="NICnumber"
              name="NICnumber"
              value={formData.NICnumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="tel-num">
            <label htmlFor="telnum">Telephone Number</label>
            <input
              type="tel"
              id="telnum"
              name="telnum"
              value={formData.telnum}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mob-num">
            <label htmlFor="mobnum">Mobile Number</label>
            <input
              type="tel"
              id="mobnum"
              name="mobnum"
              value={formData.mobnum}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="emailA"
              name="emailA"
              value={formData.emailA}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="permanent-address">
            <label htmlFor="paddress">Permanent Address</label>
            <textarea
              id="paddress"
              name="paddress"
              value={formData.paddress}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="nearest-city">
            <label htmlFor="ncity">Nearest City</label>
            <input
              type="text"
              id="ncity"
              name="ncity"
              value={formData.ncity}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="district">
            <label htmlFor="district">District</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="country">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="postal-code">
            <label htmlFor="pcode">Postal Code</label>
            <input
              type="text"
              id="pcode"
              name="pcode"
              value={formData.pcode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="radio-group-for-distance">
            <label htmlFor="pcode">
              Distance from Karapitiya to nearest city
            </label>
            <div className="radio-group-container">
              {distanceFromKarapitiya.map((radioBtn) => (
                <span key={radioBtn.id}>
                  <input
                    type="radio"
                    id={radioBtn.id}
                    name="radioGroupForDistance"
                    value={radioBtn.label}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor={radioBtn.id}>{radioBtn.label}</label>
                </span>
              ))}
            </div>
          </div>
        </fieldset>
        <br />
        <br />
        <h2>Guardian Information</h2>
        <fieldset className="guardian-infor">
          <div className="guardian-full-name">
            <label htmlFor="guardian-fullname">Full Name</label>
            <input
              type="text"
              id="guardianFullname"
              name="guardianFullname"
              value={formData.guardianFullname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="guardian-permanent-address">
            <label htmlFor="guardian-paddress">Permanent Address</label>
            <textarea
              id="guardianPaddress"
              name="guardianPaddress"
              value={formData.guardianPaddress}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="contact-num">
            <label htmlFor="contactnum">Contact No</label>
            <input
              type="text"
              id="contactnum"
              name="contactnum"
              value={formData.contactnum}
              onChange={handleInputChange}
              required
            />
          </div>
        </fieldset>
        <br />
        <br />
        <h2>Academic Information</h2>
        <fieldset className="academic-infor">
          <div className="radio-group-academic-year">
            <label htmlFor="academicYear">Academic Year</label>
            <div className="radio-group-container">
              {academicYear.map((radioBtn) => (
                <span key={radioBtn.id}>
                  <input
                    type="radio"
                    id={radioBtn.id}
                    name="academicYear"
                    value={radioBtn.label}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor={radioBtn.id}>{radioBtn.label}</label>
                </span>
              ))}
            </div>
          </div>

          <div className="radio-group-degree-program">
            <label htmlFor="degreeProgram">Degree Program</label>
            <div className="radio-group-container">
              {degreeProgram.map((radioBtn) => (
                <span key={radioBtn.id}>
                  <input
                    type="radio"
                    id={radioBtn.id}
                    name="degreeProgram"
                    value={radioBtn.label}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor={radioBtn.id}>{radioBtn.label}</label>
                </span>
              ))}
            </div>
          </div>

          <div className="radio-group-accormodation-req-period">
            <label htmlFor="accommodationPeriod">
              Accommodation Request Period
            </label>
            <div className="radio-group-container">
              {accomodationReqPeriod.map((radioBtn) => (
                <span key={radioBtn.id}>
                  <input
                    type="radio"
                    id={radioBtn.id}
                    name="accormodationReqPeriod"
                    value={radioBtn.label}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor={radioBtn.id}>{radioBtn.label}</label>
                </span>
              ))}
            </div>
          </div>

          <div className="radio-group-reason-to-req-accm">
            <label htmlFor="reasonToRequest">
              Reason to request accommodation
            </label>
            <div className="radio-group-container">
              {reasonToReqAccmd.map((radioBtn) => (
                <span key={radioBtn.id}>
                  <input
                    type="radio"
                    id={radioBtn.id}
                    name="reasonToReqAccm"
                    value={radioBtn.label}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor={radioBtn.id}>{radioBtn.label}</label>
                </span>
              ))}
            </div>
          </div>
        </fieldset>
        <br />
        <br />
        <h2>Emergency Contact Details</h2>
        <fieldset className="emergency-contact">
          <div className="emergency-first-name emergency-fieldset-extra-features">
            <label htmlFor="e-fname">First Name</label>
            <input
              type="text"
              id="eFname"
              name="eFname"
              value={formData.eFname}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="emergency-contact-num emergency-fieldset-extra-features">
            <label htmlFor="e-contactnum">Contact No</label>
            <input
              type="text"
              id="eContactnum"
              name="eContactnum"
              value={formData.eContactnum}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="emergency-address emergency-fieldset-extra-features">
            <label htmlFor="e-address">Permanent Address</label>
            <textarea
              id="eAddress"
              name="eAddress"
              value={formData.eAddress}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <p className="e-honorary-p confirmation-extra-features">
            I honorary certified above details are correct.{" "}
          </p>

          <div className="confirmation-name confirmation-extra-features">
            <input
              type="text"
              id="confirmationFname"
              name="confirmationFname"
              value={formData.confirmationFname}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="confirmationname">Name</label>
          </div>

          <div className="confirmation-date confirmation-extra-features">
            <input
              type="date"
              id="confirmationDate"
              name="confirmationDate"
              value={formData.confirmationDate}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="confirmationdate">Date</label>
          </div>
        </fieldset>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
