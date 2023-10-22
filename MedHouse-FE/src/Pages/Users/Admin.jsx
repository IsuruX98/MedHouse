// import "./Admin.css";
// import React, { Component } from "react";

// // importing components
// import Requests from "./Admin_items/Requests";
// import Rooms from "./Admin_items/Rooms";
// import Stuff from "./Admin_items/Stuff";
// import Notice from "./Admin_items/Notice";
// import Service from "./Admin_items/Service";


// class Admin extends Component {
//   constructor(props) {
//     super(props);

//     // set initial state
//     this.state = { activeButton: null };

//     // Binding this keyword
//     this.handleButtonClick = this.handleButtonClick.bind(this);
//   }

//   handleButtonClick(buttonIndex) {
//     this.setState({ activeButton: buttonIndex });
//   }

//   render() {
//     const { activeButton } = this.state;

//     // Define the content for each person
//     const buttonContents = [
//       <div className="buttonContent">
//         <Requests />
//       </div>,
//       <div className="buttonContent">
//         <Rooms />
//       </div>,
//       <div className="buttonContent">
//         <Stuff />
//       </div>,
//       <div className="buttonContent">
//         <Notice />
//       </div>,
//       <div className="buttonContent">
//         <Service />
//       </div>
//     ];

//     // Determine the active content
//     const activeContent =
//       activeButton != null ? buttonContents[activeButton] : buttonContents[0];

//     return (
//       <div className="btns_caption">
//         <h2>Click a button to display its content:</h2>
//         <div className="btns">
//           <button onClick={() => this.handleButtonClick(0)}>Requests</button>
//           <button onClick={() => this.handleButtonClick(1)}>Rooms</button>
//           <button onClick={() => this.handleButtonClick(2)}>Stuff</button>
//           <button onClick={() => this.handleButtonClick(3)}>Notice</button>
//           <button onClick={() => this.handleButtonClick(4)}>service</button>
//         </div>

//         {activeContent}
//       </div>
//     );
//   }
// }

// export default Admin;



// FacilitiesTable.js

import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetch('/api/facilities')
      .then(res => res.json())
      .then(data => setFacilities(data));
  }, []);

  return (
    <div>
      <h1>
        Facilities
      </h1>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Room Number</th>
                <th>Availability</th>
                <th>Gender</th>
                <th>StudentID</th>
                <th>Name</th>
                <th>Services</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                facilities.map(facility =>
                  <tr>
                    <td>{facility.roomNumber}</td>
                    <td>{facility.isAvailable}</td>
                    <td>{facility.gender}</td>
                    <td>{facility.studentID}</td>
                    <td>{facility.studentName}</td>
                    <td>{facility.services}</td>
                    <td>{facility.price}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
