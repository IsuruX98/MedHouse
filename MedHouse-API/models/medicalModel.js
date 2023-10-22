const mongoose = require("mongoose");

const medicalSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true,
        },
        studentID: {
            type: Number,
            required: true,
        },
        academicYear: {
            type: Number,
            required: true,
        },
        roomID: {
            type: Number,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        serviceType: {
            type: String,
            required: true,
        },
        diseaseLevel: {
            type: Number,
            required: true,
        },
        treatmentLevel: {
            type: String,
            required: true,
        },
        illness: {
            type: String,
            required: true,
        },
        otherMention: {
            type: String,
        },
        sickPeriod: {
            type: Number,
            required: true,
        },
        makeAppointment: {
            type: Boolean,
            required: true,
        },
        appointmentTime: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Medical", medicalSchema);
