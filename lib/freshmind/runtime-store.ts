import { mkdir, readFile, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

import { createSeedStore } from "@/lib/freshmind/seed"
import type { RepositoryStore } from "@/lib/freshmind/types"

const dataDir = path.join(os.tmpdir(), "freshmind-runtime")
const dataFile = path.join(dataDir, "store.json")

export async function loadRuntimeStore(): Promise<RepositoryStore> {
  try {
    const content = await readFile(dataFile, "utf8")
    return JSON.parse(content) as RepositoryStore
  } catch {
    const seed = createSeedStore()
    await saveRuntimeStore(seed)
    return seed
  }
}

export async function saveRuntimeStore(store: RepositoryStore) {
  await mkdir(dataDir, { recursive: true })
  await writeFile(dataFile, JSON.stringify(store, null, 2), "utf8")
}

export function runtimeUploadsDirectory() {
  return path.join(dataDir, "uploads")
}
