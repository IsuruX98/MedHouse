const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    studentID: {
        type: Number,
        required: true
    },
    accommodationBlock: {
        type: String,
        required: true
    },
    roomID: {
        type: Number,
        required: true
    },
    leaveType: {
        type: String,
        required: true
    },
    otherReason: String,
    inDate: {
        type: Date,
        required: true
    },
    outDate: {
        type: Date,
        required: true
    },
    responsiblePerson: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Pending' // Status can be 'Approved' or 'Rejected' based on admin decision
    }
});

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;