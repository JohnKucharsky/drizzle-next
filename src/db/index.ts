import { Client } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "data",
});

await client.connect();

export const db = drizzle(client);
