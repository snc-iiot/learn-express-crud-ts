import SQL from "../libs/SQL";
import dbconfig from "../config/dbconfig";
import { EmployeeInterface } from "./interfaces";

export default class EmployeeModel {
  private sql: SQL;

  public constructor() {
    this.sql = new SQL(dbconfig);
  }

  //! R = Read
  public async getEmployees(): Promise<EmployeeInterface[]> {
    const query = "SELECT EmployeeID,Name,StartDate FROM Employees;";
    const result = await this.sql.execute(query);
    return result.recordset;
  }
}
