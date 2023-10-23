const Clearance = require("../models/clearanceModel");

// Create a new clearance request
const createClearanceRequest = async (req, res) => {
  try {
    // Extract data from request body
    const {
      studentName,
      studentID,
      studentEmail,
      roomID,
      registrationYear,
      duration,
      beds,
      towelRack,
      chair,
      table,
      cardboard,
      extraKey,
      handOverDate,
      otherNotes,
      certified,
    } = req.body;

    // Create a new clearance request object
    const newClearanceRequest = new Clearance({
      studentName,
      studentID,
      studentEmail,
      roomID,
      registrationYear,
      duration,
      beds,
      towelRack,
      chair,
      table,
      cardboard,
      extraKey,
      handOverDate,
      otherNotes,
      certified,
    });

    // Save the clearance request to the database
    await newClearanceRequest.save();
    res.status(201).json(newClearanceRequest);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all clearance requests
const getAllClearanceRequests = async (req, res) => {
  try {
    const clearanceRequests = await Clearance.find({});
    res.status(200).json(clearanceRequests);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateClearanceRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const clearanceRequest = await Clearance.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!clearanceRequest) {
      res.status(404).json({ error: "Clearance request not found" });
    } else {
      res.status(200).json(clearanceRequest);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export controller functions
module.exports = {
  createClearanceRequest,
  getAllClearanceRequests,
  updateClearanceRequestStatus,
  // Add other controller functions for updating, deleting, and retrieving single clearance requests as needed
};
