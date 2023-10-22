const express = require("express");
const router = express.Router();
const {
    createMentoringRequest,
    getAllMentoringRequests,
} = require("../controllers/mentoringController");

// Create a new mentoring request
router.post("/", createMentoringRequest);

// Get all mentoring requests
router.get("/", getAllMentoringRequests);

module.exports = router;
