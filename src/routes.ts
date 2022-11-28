import { Router } from "express";
import EmployeeController from "./controllers/EmployeeController";

const router = Router();

router.get("/employees", EmployeeController.getEmployees);
router.post("/add-employee", EmployeeController.createEmployee);
router.post("/update-employee", EmployeeController.updateEmployee);
router.post("/delete-employee", EmployeeController.deleteEmployee);

export default router;
