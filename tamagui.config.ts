// tamagui.config.ts
import { createTamagui } from '@tamagui/core'
import { config as defaultConfig } from '@tamagui/config/v3'
import { createInterFont } from '@tamagui/font-inter'
import { themes as baseThemes, tokens as baseTokens } from '@tamagui/themes'

/**
 * 1) Fonts
 */
const bodyFont = createInterFont({
  family:
    'Inter, System UI, -apple-system, Segoe UI, Roboto, Ubuntu, Arial, sans-serif',
  // uncomment if you want exact control:
  // size: { 1: 12, 2: 14, 3: 16, 4: 18, 5: 20, 6: 24, 7: 28, 8: 34, 9: 40 },
  // weight: { 1: '300', 2: '400', 3: '500', 4: '600', 5: '700' },
})

/**
 * 2) Brand tokens (additive to @tamagui/themes tokens)
 * Keep only what you truly need – less is more.
 */
const brandTokens = {
  color: {
    // Dark base
    bg: '#0A0F23',
    bg2: '#101830',
    card: '#16224c',
    accent: '#0052CC',
    accent2: '#E82C2C',
    glow: '#22E3FF',
    text: '#F4F6FB',
    muted: '#9DA7B2',
    line: 'rgba(255,255,255,0.08)',
    yes: '#9AF7A2',
    // Light base
    l_bg: '#FAFBFF',
    l_bg2: '#FFFFFF',
    l_card: '#FAFBFF',
    l_text: '#0A0F23',
    l_muted: '#516171',
    l_line: 'rgba(0,0,0,0.08)',
    l_yes: '#39b644',
    l_glow: '#0052CC',
  },
  radius: {
    sm: 12,
    md: 14,
    lg: 16,
    round: 999,
  },
  // Feel free to keep using the base scales; only override where you care:
  // size/space/zIndex below are examples if you want tighter control
  size: { 0: 0, 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 7: 28, 8: 32, 9: 40, 10: 48 },
  space: { 0: 0, 1: 4, 2: 8, 3: 10, 4: 12, 5: 16, 6: 20, 7: 24, 8: 28, 9: 32, 10: 40 },
  zIndex: { 0: 0, 1: 1, 2: 2, 10: 10, 100: 100, 1000: 1000 },
}

/**
 * 3) Brand themes (semantic aliases to your brand tokens)
 * These overlay on top of baseThemes (which bring color1..12, etc).
 * You can reference these keys in components as $bg, $text, $glow...
 */
const brandLight = {
  bg: '$l_bg',
  bg2: '$l_bg2',
  card: '$l_card',
  text: '$l_text',
  glow: '$l_glow',
  muted: '$l_muted',
  line: '$l_line',
  yes: '$l_yes',
  accent: '$accent',
  accent2: '$accent2',
}

const brandDark = {
  bg: '$bg',
  bg2: '$bg2',
  card: '$card',
  text: '$text',
  glow: '$glow',
  muted: '$muted',
  line: '$line',
  yes: '$yes',
  accent: '$accent',
  accent2: '$accent2',
}

/**
 * 4) Media, selection, shorthands, animations
 */
const media = {
  ...defaultConfig.media,
  xs: { maxWidth: 660 },
  sm: { maxWidth: 800 },
  md: { maxWidth: 1020 },
  lg: { maxWidth: 1280 },
  xl: { maxWidth: 1420 },
  short: { maxHeight: 820 },
  tall: { minHeight: 820 },
  hoverNone: { hover: 'none' },
  pointerCoarse: { pointer: 'coarse' },
}

const shorthands = {
  ...defaultConfig.shorthands,
  p: 'padding',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  m: 'margin',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  bc: 'backgroundColor',
  br: 'borderRadius',
  bw: 'borderWidth',
}

export const config = createTamagui({
  // Start from Tamagui’s v3 preset:
  ...defaultConfig,

  /**
   * KEY MERGE RULE: last spread wins.
   * We want base -> default -> brand, so your brand overrides actually apply.
   */
  tokens: {
    ...baseTokens,           // from @tamagui/themes
    ...defaultConfig.tokens, // preset v3 tokens
    ...brandTokens,          // your brand tokens override last
  },

  themes: {
    ...baseThemes,           // full suite (light/dark + color scales)
    ...defaultConfig.themes, // preset themes
    light: {
      ...(defaultConfig.themes?.light ?? {}),
      ...brandLight,         // your semantic keys layered onto light
    },
    dark: {
      ...(defaultConfig.themes?.dark ?? {}),
      ...brandDark,          // your semantic keys layered onto dark
    },
  },

  defaultFont: 'body',
  fonts: {
    ...defaultConfig.fonts,
    body: bodyFont,
    heading: bodyFont,
    mono: defaultConfig.fonts?.mono ?? bodyFont,
  },

  media,

  // Subtle but nice DX polish:
  selectionStyles: (theme) => ({
    cursor: 'default',
    backgroundColor: theme.color4,
    color: theme.color12,
  }),

  // Highly useful QoL; you can add your own here too:
  shorthands,

  // If you want themes applied on the document root for SSR/web:
  // themeClassNameOnRoot: true,
})

export type AppConfig = typeof config
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
