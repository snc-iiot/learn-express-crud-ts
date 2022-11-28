import { Request } from "express";

export default interface CreateEmployeeRequest extends Request {
  body: {
    Name: string;
    StartDate: string;
  };
}
