const express = require("express");
const router = express.Router();
const {
  createCleaningRequest,
  getAllCleaningRequests,
  updateCleaningRequestStatus,
} = require("../controllers/cleaningController");

// Create a new cleaning request
router.post("/", createCleaningRequest);

// Get all cleaning requests
router.get("/", getAllCleaningRequests);

// Update cleaning request status by ID
router.patch("/:id/status", updateCleaningRequestStatus);

// Add other routes for updating, deleting, and retrieving single cleaning requests as needed

module.exports = router;
