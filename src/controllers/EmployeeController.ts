import { Request, Response } from "express";
import EmployeeModel from "../models/EmployeeModel";

export default class EmployeeController {
  public static async getEmployees(req: Request, res: Response) {
    try {
      const data = await EmployeeModel.getEmployees();
      return res.send(data);
    } catch (error) {
      return res.send([]);
    }
  }
}
