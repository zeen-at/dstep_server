import express, { Router } from "express";
import { collateData, fetchFormData } from "../controller/formController.js";


const router = express.Router();

router.post("/data", collateData);
router.get("/fetch", fetchFormData); 


export default router;