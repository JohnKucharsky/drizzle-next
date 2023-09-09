import { Client } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "data",
});

await client.connect();

export const db = drizzle(client, { schema });
