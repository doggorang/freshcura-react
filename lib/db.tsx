import mysql from "mysql2/promise";

export async function query(query: string, parameter: string[]) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "id21369415_frescura",
    user: "root",
    password: ''
  });
  try {
    const results = await dbconnection.execute(query,parameter);
    dbconnection.end();
    return results;
  } catch (error: any) {
    throw new Error(error.message);
  }
}