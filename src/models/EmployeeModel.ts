import SQL from "../libs/SQL";
import dbconfig from "../config/dbconfig";
import { EmployeeInterface } from "./interfaces";

export default class EmployeeModel {
  //! C = Create
  public static async createEmployee(Name: string, StartDate: string) {
    const conn = new SQL(dbconfig);
    const query = `INSERT INTO Employees (Name, StartDate) VALUES ('${Name}', '${StartDate}');`;
    const result = await conn.execute(query);
    conn.disconnect();
    return { data: result.rowsAffected, error: null };
  }

  //! R = Read
  public static async getEmployees(): Promise<EmployeeInterface[]> {
    const conn = new SQL(dbconfig);
    const query = "SELECT EmployeeID,Name,StartDate FROM Employees;";
    const result = await conn.execute(query);
    conn.disconnect();
    return result.recordset;
  }

  //! U = Update
  public static async updateEmployee(
    EmployeeID: number,
    Name: string,
    StartDate: string
  ) {
    const conn = new SQL(dbconfig);
    const query = `UPDATE Employees SET Name='${Name}', StartDate='${StartDate}' WHERE EmployeeID=${EmployeeID};`;
    const result = await conn.execute(query);
    conn.disconnect();
    return result.rowsAffected;
  }

  //! D = Delete
  public static async deleteEmployee(EmployeeID: number) {
    const conn = new SQL(dbconfig);
    const query = `DELETE FROM Employees WHERE EmployeeID=${EmployeeID};`;
    const result = await conn.execute(query);
    conn.disconnect();
    return result.rowsAffected;
  }
}
