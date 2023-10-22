const express = require("express");
const router = express.Router();
const roomInquiryController = require("../controllers/roomInquiryController");

// Create a new room inquiry
router.post("/", roomInquiryController.createRoomInquiry);

// Get all room inquiries
router.get("/", roomInquiryController.getAllRoomInquiries);

// Get a single room inquiry by ID
router.get("/:id", roomInquiryController.getRoomInquiryById);

// Update a room inquiry by ID
router.put("/:id", roomInquiryController.updateRoomInquiry);

// Delete a room inquiry by ID
router.delete("/:id", roomInquiryController.deleteRoomInquiry);

module.exports = router;
