module.exports = function (api) {
  const isDev = api.env('development')
  api.cache(true)
  plugins = []
  isDev && plugins.push('react-refresh/babel') // ✅ Required for live reload
  plugins.push([
    '@tamagui/babel-plugin',
    { components: ['tamagui'], config: './tamagui.config.ts', logTimings: false },
  ])
  plugins.push('react-native-reanimated/plugin')
  return {
    presets: ['babel-preset-expo'],
    plugins: plugins
  }
}
