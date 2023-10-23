import React, { useState } from "react";
import "./AdminDashboard.css";
import AttendeeTable from "./AttendeeTable";
import RoomInquiriesTable from "./RoomInquiriesTable";
import CleaningTable from "./CleaningTable";
import MedicalServiceTable from "./MedicalServiceTable";
import ClearanceTable from "./ClearanceTable";
import MentoringTable from "./MentoringTable";
import LeaveRequestTable from "./LeaveRequestTable";
import StatisticsTab from "./StatisticsTab";

function AdminDashboard() {
  const [selectedTable, setSelectedTable] = useState("statistics");

  const handleNavItemClick = (tableName) => {
    setSelectedTable(tableName);
  };

  return (
    <div className="admin-dashboard">
      <div className="side-nav">
        <div className="nav-item-title">ADMIN DASHBOARD</div>
        <div
          className="nav-item"
          onClick={() => handleNavItemClick("statistics")}
        >
          Statistics
        </div>
        <div
          className="nav-item"
          onClick={() => handleNavItemClick("attendee")}
        >
          Attendee
        </div>
        <div
          className="nav-item"
          onClick={() => handleNavItemClick("roomInquiries")}
        >
          Room Inquiries
        </div>
        <div
          className="nav-item"
          onClick={() => handleNavItemClick("cleaning")}
        >
          Cleaning
        </div>
        <div
          className="nav-item"
          onClick={() => handleNavItemClick("medicalService")}
        >
          Medical Service
        </div>
        <div
          className="nav-item"
          onClick={() => handleNavItemClick("clearance")}
        >
          Clearance
        </div>
        <div
          className="nav-item"
          onClick={() => handleNavItemClick("mentoring")}
        >
          Mentoring
        </div>
        <div
          className="nav-item"
          onClick={() => handleNavItemClick("leaveRequest")}
        >
          Leave Request
        </div>
      </div>
      <div className="table-container">
        {selectedTable === "statistics" && <StatisticsTab />}
        {selectedTable === "attendee" && <AttendeeTable />}
        {selectedTable === "roomInquiries" && <RoomInquiriesTable />}
        {selectedTable === "cleaning" && <CleaningTable />}
        {selectedTable === "medicalService" && <MedicalServiceTable />}
        {selectedTable === "clearance" && <ClearanceTable />}
        {selectedTable === "mentoring" && <MentoringTable />}
        {selectedTable === "leaveRequest" && <LeaveRequestTable />}
      </div>
    </div>
  );
}

export default AdminDashboard;
