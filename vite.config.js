import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { partytownVite } from '@builder.io/partytown/utils'
import legacy from '@vitejs/plugin-legacy'
import glsl from 'vite-plugin-glsl'

import _config from './_config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const HOST = _config.server.host
const PORT = _config.server.port

export default {
  server: {
    host: HOST,
    port: PORT,
  },
  plugins: [
    legacy(),
    glsl(),
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown'),
    }),
  ],
}
