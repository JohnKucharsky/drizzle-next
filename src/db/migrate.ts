import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const pool = new Pool({
  connectionString:
    "postgresql://postgres:postgres@127.0.0.1:5432/data?schema=public",
});

const db = drizzle(pool);

async function main() {
  await migrate(db, { migrationsFolder: "drizzle" });
}

main().catch((err) => {
  console.log(err);
});
