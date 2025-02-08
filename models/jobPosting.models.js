const mongoose = require("mongoose");
const jobPostingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
        enum:[
            "Full-time (On-site)",
            "Part-time (On-site)", 
            "Full-time (Remote)", 
            "Part-time (Remote)",
        ]
    },
    jobDescription: {
        type: String,
        required: true,
    },
    jobQualification: {
        type: [String],
        required: true,
    }
}, {
    timestamps: true,
});
const JobPosting = mongoose.model("JobPosting", jobPostingSchema);
module.exports = JobPosting;