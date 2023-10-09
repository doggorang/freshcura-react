import { query } from "../../../lib/db";

export async function GET(req: Request, res: Response) {
  const q = "SELECT * FROM ingredients";
  const parameters: string[] = [];
  const [results] = await query(q, parameters);
  return Response.json({ results });
}