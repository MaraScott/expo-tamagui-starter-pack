import { createExpoWebpackConfigAsync } from '@expo/webpack-config'

export default async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

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
