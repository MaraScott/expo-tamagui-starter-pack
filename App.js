// App.js
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TamaguiProvider, YStack, H1, Paragraph, Button, Theme } from 'tamagui'
import { config } from './tamagui.config'

export default function App() {
  const [isDark, setIsDark] = React.useState(true)

  return (
    <TamaguiProvider config={config}>
      <Theme name={isDark ? 'dark' : 'light'}>
        <YStack f={1} ai="center" jc="center" bg="$background" p="$5" space="$4">
          <H1 ta="center">Your Custom Tamagui Config</H1>
          <Paragraph ta="center" maw={560}>
            Tokens, themes, fonts, shorthands, and defaults are now controlled by <Paragraph fontWeight="700">tamagui.config.ts</Paragraph>.
          </Paragraph>
          <Button onPress={() => setIsDark((v) => !v)}>
            Switch to {isDark ? 'Light' : 'Dark'} theme
          </Button>
          <StatusBar style={isDark ? 'light' : 'dark'} />
        </YStack>
      </Theme>
    </TamaguiProvider>
  )
}
