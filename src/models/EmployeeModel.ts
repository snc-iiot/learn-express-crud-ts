import SQL from "../libs/SQL";
import dbconfig from "../config/dbconfig";
import { EmployeeInterface } from "./interfaces";

export default class EmployeeModel {
  private static sql: SQL;

  public constructor() {
    EmployeeModel.sql = new SQL(dbconfig);
  }

  //! C = Create
  public static async createEmployee(Name: string, StartDate: string) {
    const query = `INSERT INTO Employees (Name, StartDate) VALUES ('${Name}', '${StartDate}');`;
    const result = await EmployeeModel.sql.execute(query);
    return { data: result.rowsAffected, error: null };
  }

  //! R = Read
  public static async getEmployees(): Promise<EmployeeInterface[]> {
    const query = "SELECT EmployeeID,Name,StartDate FROM Employees;";
    const result = await EmployeeModel.sql.execute(query);
    return result.recordset;
  }

  //! U = Update
  public static async updateEmployee(
    EmployeeID: number,
    Name: string,
    StartDate: string
  ) {
    const query = `UPDATE Employees SET Name='${Name}', StartDate='${StartDate}' WHERE EmployeeID=${EmployeeID};`;
    const result = await EmployeeModel.sql.execute(query);
    return result.rowsAffected;
  }

  //! D = Delete
  public static async deleteEmployee(EmployeeID: number) {
    const query = `DELETE FROM Employees WHERE EmployeeID=${EmployeeID};`;
    const result = await EmployeeModel.sql.execute(query);
    return result.rowsAffected;
  }
}
