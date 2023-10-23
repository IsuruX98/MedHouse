const MentoringRequest = require("../models/mentoringModel");

const createMentoringRequest = async (req, res) => {
  try {
    const {
      studentID,
      academicYear,
      roomID,
      requestTime,
      mentoringType,
      reason,
    } = req.body;

    const newMentoringRequest = new MentoringRequest({
      studentID,
      academicYear,
      roomID,
      requestTime,
      mentoringType,
      reason,
    });

    await newMentoringRequest.save();
    res.status(201).json(newMentoringRequest);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllMentoringRequests = async (req, res) => {
  try {
    const mentoringRequests = await MentoringRequest.find({});
    res.status(200).json(mentoringRequests);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateMentoringRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const mentoringRequest = await MentoringRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!mentoringRequest) {
      res.status(404).json({ error: "Mentoring request not found" });
    } else {
      res.status(200).json(mentoringRequest);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createMentoringRequest,
  getAllMentoringRequests,
  updateMentoringRequestStatus,
};
