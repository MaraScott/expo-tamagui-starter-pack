import fs from 'node:fs'
import path from 'node:path'
import { createExpoWebpackConfigAsync } from '@expo/webpack-config'

export default async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  config.output.publicPath = './';

  const templatePath = path.resolve(__dirname, 'public/index.html')

  if (fs.existsSync(templatePath) && Array.isArray(config.plugins)) {
    config.plugins.forEach((plugin) => {
      if (plugin?.constructor?.name === 'HtmlWebpackPlugin') {
        if (plugin.userOptions) {
          plugin.userOptions.template = templatePath
        }
        if (plugin.options) {
          plugin.options.template = templatePath
        }
      }
    })
  }

  // ✅ Enable polling (good for WSL2, Docker, or network drives)
  config.watchOptions = {
    poll: 1000, // check every 1s
    ignored: /node_modules/,
  }

  // ✅ Force hot module replacement
  config.devServer = {
    ...config.devServer,
    hot: true,
    liveReload: true,
    client: {
      overlay: true,
    },
  }

  return config
}
