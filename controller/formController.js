import dataInstance from "../model/formModel.js";

export const collateData = async (req, res) => {
    try {

        const { enrolledParticipants, percentageOfEnrolledParticipants, maleApplicants, femaleApplicants,percentageOfFemaleApplicants, disabledMale, disabledFemale, percentageOfDisabled, marketingApplicants, tradingApplicants, totalDisabled, totalRegistered } = req.body;

        const user = new dataInstance({
            enrolledParticipants,
            percentageOfEnrolledParticipants,
            maleApplicants,
            femaleApplicants,
            percentageOfFemaleApplicants,
            disabledMale,
            disabledFemale,
            percentageOfDisabled,
            marketingApplicants,
            tradingApplicants,
            totalDisabled,
            totalRegistered
            
        })

        await user.save();

        return res.status(200).json({
            message: "Form submitted successfully!",
            data: user
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "failed",
            message: `Internal Server Error: ${error}`,
            route: "/register"
        })
    }
}

export const fetchFormData = async (req, res) => {
    try {
        const formData = await dataInstance.find();

        return res.status(200).json({
            data: formData,
            message: "Form data retrieved successfully!",
            status: "Success"
        });
        
    } catch (error) {

        console.error(error);
    return res.status(500).json({
      status: "failed",
      message: `Internal Server Error: ${error}`,
      route: "/form/data"
    });
        
    }
}