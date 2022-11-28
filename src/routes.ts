import { Router } from "express";
import EmployeeController from "./controllers/EmployeeController";

const router = Router();

router.get("/employees", EmployeeController.getEmployees);

export default router;
