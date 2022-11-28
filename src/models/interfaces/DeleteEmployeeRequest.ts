import { Request } from "express";

export default interface DeleteEmployeeRequest extends Request {
  params: {
    EmployeeID: string;
  };
}
