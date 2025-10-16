module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-refresh/babel', // ✅ Required for live reload
      ['@tamagui/babel-plugin', { components: ['tamagui'], logTimings: false }],
      'react-native-reanimated/plugin'
    ]
  }
}
