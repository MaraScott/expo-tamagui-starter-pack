import { createTamagui } from '@tamagui/core'
import { config as defaultConfig } from '@tamagui/config/v3'
import { createInterFont } from '@tamagui/font-inter'
import { themes, tokens } from '@tamagui/themes'

const bodyFont = createInterFont({
  family: 'Inter, System UI, -apple-system, Segoe UI, Roboto, Ubuntu, Arial, sans-serif',
  // You can map sizes/weights if you want fine control; defaults work well:
  // size: { 1: 12, 2: 14, 3: 16, 4: 18, 5: 20, 6: 24, 7: 28, 8: 34, 9: 40 },
  // weight: { 1: '300', 2: '400', 3: '500', 4: '600', 5: '700' },
})

export const config = createTamagui({
  ...defaultConfig,
  defaultFont: 'body',
  fonts: {
    ...defaultConfig.fonts,
    body: bodyFont,
    heading: bodyFont,
    mono: defaultConfig.fonts?.mono ?? bodyFont,
  },
  tokens: {
    ...tokens,
    ...defaultConfig.tokens,
  },
  themes: {
    ...themes,
    ...defaultConfig.themes,
  }, // includes light & dark, plus color scales
  media: {
    ...defaultConfig.media,
    // sensible defaults
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
  selectionStyles: (theme) => ({
    cursor: 'default',
    backgroundColor: theme.color4,
    color: theme.color12,
  }),
})

export type AppConfig = typeof config
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
