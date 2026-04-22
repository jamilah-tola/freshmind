import { spawn } from "node:child_process"

const port = process.env.PORT || "3000"
const baseUrl = `http://localhost:${port}`

const nextDev = spawn("next", ["dev", "-p", String(port)], {
  env: process.env,
  stdio: ["inherit", "pipe", "pipe"],
})

let startedWarmup = false

function pipeOutput(stream, output) {
  stream.on("data", (chunk) => {
    const text = chunk.toString()
    output.write(chunk)

    if (!startedWarmup && text.includes("Ready in")) {
      startedWarmup = true
      void warmupCss()
    }
  })
}

async function warmupCss() {
  const maxAttempts = 20

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const htmlRes = await fetch(baseUrl, { cache: "no-store" })
      if (!htmlRes.ok) {
        throw new Error(`HTML ${htmlRes.status}`)
      }

      const html = await htmlRes.text()
      const cssMatch = html.match(/\/_next\/static\/css\/app\/layout\.css\?v=\d+/)

      if (!cssMatch) {
        throw new Error("CSS href not found in HTML")
      }

      const cssRes = await fetch(`${baseUrl}${cssMatch[0]}`, { cache: "no-store" })
      if (!cssRes.ok) {
        throw new Error(`CSS ${cssRes.status}`)
      }

      process.stdout.write(
        `\n[dev-warmup] Prefetched / and ${cssMatch[0]} to avoid first-load unstyled render.\n`
      )
      return
    } catch (error) {
      if (attempt === maxAttempts) {
        process.stdout.write(
          `\n[dev-warmup] Warmup was not fully successful after ${maxAttempts} attempts; first load may compile slowly.\n`
        )
        return
      }
      await new Promise((resolve) => setTimeout(resolve, 300))
    }
  }
}

pipeOutput(nextDev.stdout, process.stdout)
pipeOutput(nextDev.stderr, process.stderr)

function forwardSignal(signal) {
  if (!nextDev.killed) {
    nextDev.kill(signal)
  }
}

process.on("SIGINT", () => forwardSignal("SIGINT"))
process.on("SIGTERM", () => forwardSignal("SIGTERM"))

nextDev.on("exit", (code, signal) => {
  if (signal) {
    process.exit(1)
  }
  process.exit(code ?? 0)
})
