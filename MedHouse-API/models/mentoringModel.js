const mongoose = require("mongoose");

const mentoringSchema = new mongoose.Schema(
    {
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
        requestTime: {
            type: Number,
            required: true,
        },
        mentoringType: {
            type: String,
            enum: ["student", "lecture", "counselling"],
            required: true,
        },
        reason: {
            type: String,
            enum: ["academic", "exam", "personal", "health", "other"],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("MentoringRequest", mentoringSchema);
