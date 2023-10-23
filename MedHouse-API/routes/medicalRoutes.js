const express = require("express");
const router = express.Router();
const {
  createMedicalRequest,
  getAllMedicalRequests,
  updateMedicalRequestStatus,
} = require("../controllers/medicalController");

// Create a new medical request
router.post("/", createMedicalRequest);

// Get all medical requests
router.get("/", getAllMedicalRequests);

// Update medical request status by ID
router.patch("/:id/status", updateMedicalRequestStatus);

// Add other routes for updating, deleting, and retrieving single medical requests as needed

module.exports = router;
