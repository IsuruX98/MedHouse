const Medical = require("../models/medicalModel");

// Create a new medical request
const createMedicalRequest = async (req, res) => {
  try {
    // Extract data from request body
    const {
      studentName,
      studentID,
      academicYear,
      roomID,
      age,
      serviceType,
      diseaseLevel,
      treatmentLevel,
      illness,
      otherMention,
      sickPeriod,
      makeAppointment,
      appointmentTime,
    } = req.body;

    // Create a new medical request object
    const newMedicalRequest = new Medical({
      studentName,
      studentID,
      academicYear,
      roomID,
      age,
      serviceType,
      diseaseLevel,
      treatmentLevel,
      illness,
      otherMention,
      sickPeriod,
      makeAppointment,
      appointmentTime,
    });

    // Save the medical request to the database
    await newMedicalRequest.save();
    res.status(201).json(newMedicalRequest);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all medical requests
const getAllMedicalRequests = async (req, res) => {
  try {
    const medicalRequests = await Medical.find({});
    res.status(200).json(medicalRequests);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateMedicalRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const medicalRequest = await Medical.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!medicalRequest) {
      res.status(404).json({ error: "Medical request not found" });
    } else {
      res.status(200).json(medicalRequest);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export controller functions
module.exports = {
  createMedicalRequest,
  getAllMedicalRequests,
  updateMedicalRequestStatus,
  // Add other controller functions for updating, deleting, and retrieving single medical requests as needed
};
