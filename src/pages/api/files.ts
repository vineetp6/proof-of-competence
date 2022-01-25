import type { NextApiRequest, NextApiResponse } from 'next'
import { join } from 'path'
import fs from 'fs'

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<string>>) {
  const dir = join(process.cwd(), 'src', 'journeys')
  const files = fs.readdirSync(dir, { withFileTypes: true })
    .filter(i => i.isFile() && i.name.endsWith('.json')).map(i => i.name)
  console.log('FILES', files)

  res.status(200).json(files)
}
