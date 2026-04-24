import "dotenv/config"

import { createDb } from "../lib/db/client"
import { seedDatabase } from "../lib/db/seed"

async function main() {
  const { db, sql } = createDb(process.env.DATABASE_URL)

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
