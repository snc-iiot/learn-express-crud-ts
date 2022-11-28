import { ConnectionPool, IResult } from "mssql";

interface ConnectionInterface {
  server: string;
  user: string;
  password: string;
  database: string;
}

export default class SQL {
  private static pool: ConnectionPool;

  public constructor({
    server,
    user,
    password,
    database,
  }: ConnectionInterface) {
    SQL.pool = new ConnectionPool({
      user,
      password,
      server,
      database,
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      options: {
        requestTimeout: 30000,
        encrypt: false,
        trustServerCertificate: false,
      },
    });
  }

  public execute(query: string): Promise<IResult<any>> {
    return new Promise(async (resolve, reject) => {
      try {
        await SQL.pool.connect();
        const result: IResult<any> = await SQL.pool.request().query(query);
        resolve(result);
      } catch (err) {
        reject(err);
      } finally {
        SQL.pool.close();
      }
    });
  }

  public disconnect() {
    SQL.pool.close();
  }
}
