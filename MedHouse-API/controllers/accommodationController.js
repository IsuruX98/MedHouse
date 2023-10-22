const Accommodation = require("../models/accommodationModel");

// Create a new accommodation
const createAccommodation = async (req, res) => {
    try {
        const {
            fname,
            sname,
            fullname,
            birthday,
            NICnumber,
            telnum,
            mobnum,
            emailA,
            paddress,
            ncity,
            district,
            country,
            pcode,
            radioGroupForDistance,
            guardianFullname,
            guardianPaddress,
            contactnum,
            academicYear,
            degreeProgram,
            accormodationReqPeriod,
            reasonToReqAccm,
            eFname,
            eContactnum,
            eAddress,
            confirmationFname,
            confirmationDate,
        } = req.body;

        const newAccommodation = new Accommodation({
            fname,
            sname,
            fullname,
            birthday,
            NICnumber,
            telnum,
            mobnum,
            emailA,
            paddress,
            ncity,
            district,
            country,
            pcode,
            radioGroupForDistance,
            guardianFullname,
            guardianPaddress,
            contactnum,
            academicYear,
            degreeProgram,
            accormodationReqPeriod,
            reasonToReqAccm,
            eFname,
            eContactnum,
            eAddress,
            confirmationFname,
            confirmationDate,
        });

        await newAccommodation.save();
        res.status(201).json(newAccommodation);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get all accommodations
const getAllAccommodations = async (req, res) => {
    try {
        const accommodations = await Accommodation.find({});
        res.status(200).json(accommodations);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Add other controller functions for updating, deleting, and retrieving single accommodation as needed

module.exports = {
    createAccommodation,
    getAllAccommodations,
    // Export other controller functions here
};
