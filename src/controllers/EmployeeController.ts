import { Request, Response } from "express";
import EmployeeModel from "../models/EmployeeModel";
import {
  CreateEmployeeRequest,
  UpdateEmployeeRequest,
  DeleteEmployeeRequest,
} from "../models/interfaces/";

export default class EmployeeController {
  public static async createEmployee(
    req: CreateEmployeeRequest,
    res: Response
  ) {
    try {
      const { Name, StartDate } = req.body;
      const data = await EmployeeModel.createEmployee(Name, StartDate);
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error });
    }
  }

  public static async getEmployees(req: Request, res: Response) {
    try {
      const data = await EmployeeModel.getEmployees();
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error });
    }
  }

  public static async updateEmployee(
    req: UpdateEmployeeRequest,
    res: Response
  ) {
    try {
      const { EmployeeID, Name, StartDate } = req.body;
      const data = await EmployeeModel.updateEmployee(
        EmployeeID,
        Name,
        StartDate
      );
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error });
    }
  }

  public static async deleteEmployee(
    req: DeleteEmployeeRequest,
    res: Response
  ) {
    try {
      const { EmployeeID } = req.params;
      const data = await EmployeeModel.deleteEmployee(Number(EmployeeID));
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error });
    }
  }
}
