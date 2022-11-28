import { Request } from "express";

export default interface DeleteEmployeeRequest extends Request {
  body: {
    EmployeeID: number;
  };
}
