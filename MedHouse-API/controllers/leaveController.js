const Leave = require("../models/leave");

// Create Leave Request
const createLeaveRequest = async (req, res) => {
  try {
    const leaveRequest = await Leave.create(req.body);
    res.status(201).json(leaveRequest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Leave Requests
const getAllLeaveRequests = async (req, res) => {
  try {
    const leaveRequests = await Leave.find();
    res.status(200).json(leaveRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Leave Request Status
const updateLeaveRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const leaveRequest = await Leave.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!leaveRequest) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    res.status(200).json(leaveRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createLeaveRequest,
  getAllLeaveRequests,
  updateLeaveRequestStatus,
};
