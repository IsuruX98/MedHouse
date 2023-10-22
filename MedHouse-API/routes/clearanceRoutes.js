const express = require("express");
const router = express.Router();
const { createClearanceRequest, getAllClearanceRequests } = require("../controllers/clearanceController");

// Create a new clearance request
router.post("/", createClearanceRequest);

// Get all clearance requests
router.get("/", getAllClearanceRequests);

// Add other routes for updating, deleting, and retrieving single clearance requests as needed

module.exports = router;
