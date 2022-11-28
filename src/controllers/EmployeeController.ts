import { Request, Response } from "express";

export default class EmployeeController {
  public static getEmployees(req: Request, res: Response) {
    res.send("Hello World!");
  }
}
