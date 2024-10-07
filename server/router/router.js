import express from "express";
import addEmployeeController from "../controller/addEmployee.js";
import getEmployeeController from "../controller/getEmployee.js";
import deleteEmployeeController from "../controller/deleteEmployee.js";
import updateEmployeeController from "../controller/updateEmployee.js";
import getEmployeeByIDController from "../controller/getEmployeeByID.js";

const router = express.Router()

router.get("/get", getEmployeeController)
router.get("/get/:id", getEmployeeByIDController)

router.post("/add", addEmployeeController)

router.put("/edit/:id", updateEmployeeController)
router.delete("/delete/:id", deleteEmployeeController)

export default router