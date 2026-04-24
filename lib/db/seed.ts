import bcrypt from "bcryptjs"
import type { db as appDb } from "@/lib/db/client"

import {
  adminUsers,
  interviewSlots,
  opportunities,
} from "@/lib/db/schema"
import { createAdminUserId, createUniqueSlug } from "@/lib/freshmind/identifiers"
import { seededOpenings, seededStore, venues } from "@/lib/freshmind/seed"

type SeedDatabaseClient = typeof appDb

export async function seedDatabase(db: SeedDatabaseClient) {
  const existingSlugs = (
    await db.select({ slug: opportunities.slug }).from(opportunities)
  ).map((item: { slug: string }) => item.slug)

  for (const opening of seededOpenings) {
    await db
      .insert(opportunities)
      .values({
        ...opening,
        slug: createUniqueSlug(opening.title, existingSlugs),
      })
      .onConflictDoNothing()
  }

  for (const slot of seededStore.slots) {
    const venue = venues.find((item) => item.id === slot.venueId)
    if (!venue) {
      continue
    }

    await db
      .insert(interviewSlots)
      .values({
        id: slot.id,
        opportunityId: slot.openingId,
        venueId: slot.venueId,
        venueName: venue.name,
        venueCity: venue.city,
        venueRegion: venue.region,
        venueAddress: venue.address,
        venueMapUrl: venue.mapUrl,
        venueNotes: venue.notes,
        date: slot.date,
        startTime: slot.startTime,
        endTime: slot.endTime,
        capacity: slot.capacity,
        note: slot.note,
        status: slot.status,
      })
      .onConflictDoNothing()
  }

  const email = process.env.ADMIN_SEED_EMAIL
  const password = process.env.ADMIN_SEED_PASSWORD

  if (!email || !password) {
    return
  }

  const passwordHash = await bcrypt.hash(password, 10)

  await db
    .insert(adminUsers)
    .values({
      id: createAdminUserId(),
      email,
      passwordHash,
      role: "admin",
    })
    .onConflictDoUpdate({
      target: adminUsers.email,
      set: {
        passwordHash,
        updatedAt: new Date().toISOString(),
      },
    })
}
