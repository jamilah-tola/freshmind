import { randomUUID } from "node:crypto"

function createId(prefix: string) {
  return `${prefix}-${randomUUID()}`
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function createUniqueSlug(title: string, existingSlugs: string[]) {
  const baseSlug = slugify(title)
  if (!existingSlugs.includes(baseSlug)) {
    return baseSlug
  }

  let suffix = 2
  while (existingSlugs.includes(`${baseSlug}-${suffix}`)) {
    suffix += 1
  }

  return `${baseSlug}-${suffix}`
}

export function buildRegistrationReference(
  date = new Date(),
  suffix = Math.random().toString(36).slice(2, 7).toUpperCase()
) {
  return `FM-${date.getFullYear().toString().slice(-2)}-${suffix}`
}

export function createOpportunityId() {
  return createId("opportunity")
}

export function createSlotId() {
  return createId("slot")
}

export function createRegistrationId() {
  return createId("registration")
}

export function createAdminUserId() {
  return createId("admin")
}

export function createContactSubmissionId() {
  return createId("contact")
}

