const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/leaveController");

// Create Leave Request
router.post("/", leaveController.createLeaveRequest);

// Get All Leave Requests
router.get("/", leaveController.getAllLeaveRequests);

// Update Leave Request Status
router.patch("/:id/status", leaveController.updateLeaveRequestStatus);

module.exports = router;
