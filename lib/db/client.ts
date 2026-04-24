import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import * as schema from "@/lib/db/schema"

type SqlClient = postgres.Sql<Record<string, unknown>>

function shouldUseSsl(databaseUrl: string) {
  const parsed = new URL(databaseUrl)
  const sslMode = parsed.searchParams.get("sslmode")
  const sslEnabled = parsed.searchParams.get("ssl")

  if (sslMode === "disable" || sslEnabled === "false") {
    return false
  }

  if (sslMode || sslEnabled === "true") {
    return true
  }

  return !["localhost", "127.0.0.1"].includes(parsed.hostname)
}

export function createSqlClient(databaseUrl = process.env.DATABASE_URL) {
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.")
  }

  return postgres(databaseUrl, {
    max: process.env.NODE_ENV === "production" ? 5 : 10,
    prepare: false,
    ssl: shouldUseSsl(databaseUrl) ? "require" : undefined,
  })
}

export function createDb(databaseUrl = process.env.DATABASE_URL) {
  const sql = createSqlClient(databaseUrl)
  return {
    db: drizzle(sql, { schema }),
    sql,
  }
}

declare global {
  // eslint-disable-next-line no-var
  var __freshmindSql: SqlClient | undefined
}

export const sql = globalThis.__freshmindSql ?? createSqlClient()

if (process.env.NODE_ENV !== "production") {
  globalThis.__freshmindSql = sql
}

export const db = drizzle(sql, { schema })
