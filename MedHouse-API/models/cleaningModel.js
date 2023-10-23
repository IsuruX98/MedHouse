const mongoose = require("mongoose");

const cleaningSchema = new mongoose.Schema(
  {
    accommodationBlock: {
      type: String,
      required: true,
    },
    roomID: {
      type: String,
      required: true,
    },
    studentID: {
      type: String,
      required: true,
    },
    requestDate: {
      type: Date,
      required: true,
    },
    overTime: {
      type: Date,
      required: true,
    },
    cleaningLevel: {
      type: String,
      required: true,
    },
    mention: {
      type: String,
    },
    availableWhileCleaning: {
      type: Boolean,
      required: true,
    },
    itemsInRoom: {
      broom: {
        type: Boolean,
        default: false,
      },
      dustPad: {
        type: Boolean,
        default: false,
      },
      dustbin: {
        type: Boolean,
        default: false,
      },
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

module.exports = mongoose.model("Cleaning", cleaningSchema);
