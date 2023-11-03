const mongoose = require("mongoose");

const roomInquirySchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    roomId: {
      type: String,
      required: true,
    },
    inquireType: {
      type: String,
      enum: ["immediate_solution", "suggestion"],
      required: true,
    },
    inquiriesCategory: {
      type: String,
      enum: [
        "room_change",
        "room_request",
        "roommate_problem",
        "room_services",
        "other",
      ],
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending", // Set default status to "pending"
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RoomInquiry", roomInquirySchema);
