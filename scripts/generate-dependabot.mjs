import { existsSync, statSync } from 'fs'
import { readdir, stat, writeFile } from 'fs/promises'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const directory = resolve(root, 'examples')

const projects = await readdir(directory)

/** @type {string[]} */
const lines = [`version: 2`, `updates:`]
for (const project of projects) {
  const info = await stat(resolve(directory, project))
  if (!info.isDirectory()) continue
  if (!(await existsSync(resolve(directory, project, 'package.json')))) continue

  lines.push(
    `
  - package-ecosystem: "npm"
    directory: "/examples/${project}"
    schedule:
      interval: "daily"
`.replace(/^\n+|\n+$/g, ''),
  )
}

await writeFile(resolve(root, '.github/dependabot.yml'), lines.join('\n'))
