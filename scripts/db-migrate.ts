import "dotenv/config"

import { migrate } from "drizzle-orm/postgres-js/migrator"

import { createDb } from "../lib/db/client"

async function main() {
  const databaseUrl =
    process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL
  const { db, sql } = createDb(databaseUrl)

  try {
    await migrate(db, {
      migrationsFolder: "drizzle",
    })
  } finally {
    await sql.end()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
