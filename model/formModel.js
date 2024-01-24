import mongoose from "mongoose";

const formData = new mongoose.Schema({
    totalRegistered: {
        type: String,
        required: true
    },
    percentageOfEnrolledParticipants: {
        type: String,
        required: true,
    },
    maleApplicants: {
        type: String,
        required: true,
        
    },
    femaleApplicants: {
        type: String,
        required: true,
        
    },
    percentageOfFemaleApplicants: {
        type: String,
        required: true,
        
    },
    disabledMale: {
        type: String,
        required: true,
        
    },
    disabledFemale: {
        type: String,
        required: true,
        
    },
    percentageOfDisabled: {
        type: String,
        required: true,
        
    },
    marketingApplicants: {
        type: String,
        required: true,
        
    },
    tradingApplicants: {
        type: String,
        required: true,
        
    },
    totalDisabled: {
        type: String,
        required: true
    },
    
}, {
    timestamps: true
}
);

const dataInstance = mongoose.model("formData", formData);

export default dataInstance;