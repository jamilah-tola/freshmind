import "dotenv/config"

import { createDb } from "../lib/db/client"
import { seedDatabase } from "../lib/db/seed"

async function main() {
  const databaseUrl =
    process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL
  const { db, sql } = createDb(databaseUrl)

  try {
    await seedDatabase(db)
  } finally {
    await sql.end()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
