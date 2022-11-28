import { Request } from "express";

export default interface UpdateEmployeeRequest extends Request {
  body: {
    EmployeeID: number;
    Name: string;
    StartDate: string;
  };
}
