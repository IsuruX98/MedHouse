const mongoose = require("mongoose");

const clearanceSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true,
        },
        studentID: {
            type: Number,
            required: true,
        },
        studentEmail: {
            type: String,
            required: true,
        },
        roomID: {
            type: Number,
            required: true,
        },
        registrationYear: {
            type: Number,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        beds: {
            type: Number,
            required: true,
        },
        towelRack: {
            type: Boolean,
            required: true,
        },
        chair: {
            type: Boolean,
            required: true,
        },
        table: {
            type: Boolean,
            required: true,
        },
        cardboard: {
            type: Boolean,
            required: true,
        },
        extraKey: {
            type: Boolean,
            required: true,
        },
        handOverDate: {
            type: Date,
            required: true,
        },
        otherNotes: {
            type: String,
        },
        certified: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Clearance", clearanceSchema);
